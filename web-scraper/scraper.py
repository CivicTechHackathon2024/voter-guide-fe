import asyncio
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup, NavigableString
import json

async def scrape_ballot(party, ward, precinct):
    global page_html
    url_template = "https://www.sec.state.ma.us/WhereDoIVoteMA/ShowBallot/ViewMyBallot/BallotOut/{}/35/{}/{}"
    url = url_template.format(party, ward, precinct)
    print(f"Fetching URL: {url}")

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        await browser.new_context(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
        ) 

        page = await browser.new_page()
        await page.goto(url, wait_until='domcontentloaded')
        await asyncio.sleep(2)

        await page.click('body', delay=100)
        await asyncio.sleep(3)

        body_content = await page.content()
        page_html = body_content

        await browser.close()

    process_and_save_data(party, ward, precinct)

def process_and_save_data(party, ward, precinct):
    soup = BeautifulSoup(page_html, 'lxml')
    elements_with_style = soup.find_all(lambda tag: tag.get('style') == 'width:70%')

    presidential = []
    for td in elements_with_style:
        for content in td.contents:
            if isinstance(content, NavigableString):
                stripped_string = content.strip()
                if stripped_string and stripped_string != "NO PREFERENCE":
                    presidential.append(stripped_string)
                elif stripped_string == "NO PREFERENCE":
                    break
        else:
            continue
        break
    
    print(presidential)
    ward_data = []
    groupFound = False
    for td in elements_with_style:
        for content in td.contents:
            if isinstance(content, NavigableString):
                stripped_string = content.strip()
                if stripped_string:
                    if stripped_string == 'GROUP':
                        groupFound = True
                        continue
                    if groupFound:
                        uppercase_parts = ' '.join([part for part in stripped_string.split() if part.isupper()])
                        if uppercase_parts:
                            ward_data.append(uppercase_parts)
    print(ward_data)
    save_to_file(party, ward, precinct, ward_data, presidential)

def save_to_file(party, ward, precinct, ward_data, presidential):
    data = {
        'party': party,
        'ward': ward,
        'precinct': precinct,
        'ward_data': ward_data,
        'presidential': presidential
    }
    with open('scraped_data.txt', 'a') as file:
        json.dump(data, file, indent=4)
        file.write('\n\n')

async def main():
    parties = ['D', 'R', 'L']
    map_ward_precinct = {1:15, 2:8, 3:17, 4:12, 5:15, 6:12, 7:10, 8:7, 9:7, 10:9, 11:10, 12:9, 13:10, 14:14, 15:9, 16:12, 17:14, 18:23, 19:13, 20:21, 21:16, 22:13}

    for p in parties:
        for ward, max_precinct in map_ward_precinct.items():
            for precinct in range(1, max_precinct + 1):
                await scrape_ballot(p, ward, precinct)

asyncio.run(main())
