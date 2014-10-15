masonry-demo-app
================

code challenge using masonry, knockout and the chute api

The three main methods: loadMoreImages(page) addImageThumbnail(item) and imageClickHandler()

loadMoreImages makes the api call and adds the thumbnails to the page, and initializes masonry when it's done loading.

addImageThumbnail adds a thumbnail for each new image

imageClickHandler handles popping up the lightbox.

A bunch of utility functions is in javascripts/utils

This has only been tested in Chrome 38
