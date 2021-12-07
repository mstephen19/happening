# Happening - Local Event Creator and Search

## Table of Contents

- [Happening - Local Event Creator and Search](#happening---local-event-creator-and-search)
  - [Table of Contents](#table-of-contents)
  - [Summary](#summary)
  - [Wireframe](#wireframe)
  - [Code Snippet](#code-snippet)
  - [Steps](#steps)
  - [User Story](#user-story)
  - [Technologies Used](#technologies-used)
  - [Contributors](#contributors)
  - [Acknowledgments](#acknowledgments)

## Summary

The purpose of this site is to create a forum that users can log into and see posts organized by city detailing any local hauntings or ghost sightings that they have experienced. Users can register accounts, search cities, create posts and embed images. Users can also commont on or vote on others' posts. Posts, locations, and users are stored server-side.

## Wireframe

![Image](./wireframe/wireframe1.png)
![Image](./wireframe/wireframe4.png)

## Code Snippet
In order to get our map to be handled visually within the rest of the page, useEffect was used to handle screen sizes and maintain a viewable size. Latitude and longitude were used to set the viewport and handle the map's viewing angle, which is set by searching cities in the search bar. 

```Javascript
useEffect(() => {
    let isMounted = true;
    (async () => {
      await makeQuery();
      if (isMounted) {
        setViewport((prev) => ({
          ...prev,
          latitude: state.latitude,
          longitude: state.longitude,
        }));
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [state, data]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setViewport((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }, 500);
    window.addEventListener('resize', handleResize);
  });

```


## Steps

- Initial framework of pages
- Set up React App
- Set up API routes
- Set up models
- Set up components and pages
- Page functionality
- Design/styling of pages

## User Story

- I want to be able to see events in my local area
- I want to be able to create an account
- I want to be able to comment or chat with people interested in my area
- I want to be able to add events as a logged in user
- I want to be able to click links to buy tickets


## Technologies Used

- [React](https://reactjs.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Express](https://expressjs.com/)
- [Apollo Express](https://www.npmjs.com/package/apollo-server-express)
- [Compression](https://www.npmjs.com/package/compression)
- [GraphQL](https://graphql.org/)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Morgan](https://www.npmjs.com/package/morgan)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [React Google Places](https://www.npmjs.com/package/react-google-places-autocomplete)
- [Material UI](https://mui.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Node Geocoder](https://www.npmjs.com/package/node-geocoder)


## Contributors

- **Alonzo Roman**

* [Link to Github](https://github.com/alonzofroman)
* [Link to LinkedIn](https://www.linkedin.com/)

- **Isaac Cortes Hernandez**

* [Link to Github](https://github.com/icortes)
* [Link to LinkedIn](https://www.linkedin.com/in/cortes-isaac)


- **Matt Stephens**

* [Link to Portfolio Site](https://mstephen19.github.io)
* [Link to Github](https://github.com/mstephen19)
* [Link to LinkedIn](https://www.linkedin.com/in/mstephen19/)


## Acknowledgments

- [W3Schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)