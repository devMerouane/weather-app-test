# Air-quality-test

This projet is an app that disaplay weather of cities. This app use https://openweathermap.org/ to fetch weather data

# Prerequisites

- NodeJs >= 16.17.0
- Yarn

# Installation

1. Install dependencies with yarn

```
  yarn
```

# Running the app in development mode

1. Create the local environment file and update the env variables
  
```
  cp ./.env.template ./.env
  code ./.env
  
  // VITE_APP_ID = add your key 
```

2. Start the application in development mode

```
  yarn dev
```

The application will be live on http://localhost:5173
