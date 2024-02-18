library(leaflet)
library(leaflet.extras)
library(dplyr)
library(sf)

# Read the shapefile
districts <- read_sf(dsn = "districts_shp", layer = "districts") %>% filter(TOWN %in% c("BOSTON"))
# Color each ward
colorScale <- colorNumeric(palette = rainbow(7), domain = as.integer(districts$WARD) %% 11)

# Create map
leaflet(districts) %>% 
  addTiles() %>%
  addPolygons(
    label = ~paste0(TOWN, ": Ward ", WARD, ", Precinct ", PRECINCT),
    popup = ~paste0('<a href=http://localhost:3000/learn_more/', WARD, '/', PRECINCT, ' target="_blank">', TOWN, ": Ward ", WARD, ", Precinct ", PRECINCT),
    fillOpacity = 0.5,
    fillColor = ~colorScale(as.integer(districts$WARD) %% 11),
    color="black",
    weight=1
  ) %>%
  addSearchOSM(searchOptions(autoCollapse=TRUE, hideMarkerOnCollapse=TRUE, zoom=20))

