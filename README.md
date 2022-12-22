# B2bAquatec

This repository includes 2 parts:

`B2bAquatec` - ecommerce platform, build with Angular. Where the prices are personalized based on the Customer Category in the Aquatec system.

`Netsuite-Angular API` - custom made API, based on SuiteScript 2.x , to process and validate the data coming thru http.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

 # Platform Breakdown B2bAquatec
 
 The prices are visible only if you're logged in. 

 The pages are as follow:
 <ol>
<li>Home page </li>
<li>Login/Register </li>
<li>About us </li>
<li>Catalog </li>
<li> Item Detail</li>
<li>Cart </li>
<li>Profile</li>
<li>404 page </li>
 </ol>

 ## Guards

 There are enabled guards on the Login/Register, Logout, Profile, Cart pages.

 ## Core Components

 The Core Components include

  <ol>
<li>Header </li>
<li>Footer </li>
<li>404 page </li>
 </ol>

 ## Custom Validators

 Custom made validator for the Phone Number , VAT Number and a "Short" pipe .

## Item Catalog
Due to the lack of information on Netsuite's side there are currently very few items. 
They're export dynamically from the system.

## Item Detail
Every Item Detail page initiates and pull data from Netsuite, the data is not cached. To ensure up to date price.

## API 
For the purpose of the API we cannot send headers. Sending Headers breaks the CORS policy of Netsuite.
There are only 2 supported `https methods`:
POST
GET

## Data storage

Currently the user data is stored in the SessionStorage.
The personal cart data is stored in LocalStorage.

## Animation

Animation was added on the main page, when you click the text headers


## In development
In progress of adding filters to the catalog page
The Cart page is not currently sending data to Netsuite