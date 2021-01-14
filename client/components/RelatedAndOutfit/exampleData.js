////// PRODUCTS:

const exampleData = {
// List from get request to /products:
  exampleProductsList: [
    {
      "id": 12012,
      "campus": "hratx",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2021-01-12T21:43:28.366Z",
      "updated_at": "2021-01-12T21:43:28.366Z"
    },
    {
      "id": 12013,
      "campus": "hratx",
      "name": "Bright Future Sunglasses",
      "slogan": "You've got to wear shades",
      "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
      "category": "Accessories",
      "default_price": "69.00",
      "created_at": "2021-01-12T21:43:28.366Z",
      "updated_at": "2021-01-12T21:43:28.366Z"
    },
    {
      "id": 12014,
      "campus": "hratx",
      "name": "Morning Joggers",
      "slogan": "Make yourself a morning person",
      "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      "category": "Pants",
      "default_price": "40.00",
      "created_at": "2021-01-12T21:43:28.366Z",
      "updated_at": "2021-01-12T21:43:28.366Z"
    },
    {
      "id": 12015,
      "campus": "hratx",
      "name": "Slacker's Slacks",
      "slogan": "Comfortable for everything, or nothing",
      "description": "I'll tell you how great they are after I nap for a bit.",
      "category": "Pants",
      "default_price": "65.00",
      "created_at": "2021-01-12T21:43:28.366Z",
      "updated_at": "2021-01-12T21:43:28.366Z"
    },
    {
      "id": 12016,
      "campus": "hratx",
      "name": "Heir Force Ones",
      "slogan": "A sneaker dynasty",
      "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      "category": "Kicks",
      "default_price": "99.00",
      "created_at": "2021-01-12T21:43:28.366Z",
      "updated_at": "2021-01-12T21:43:28.366Z"
    }
  ],

//// PRODUCT DETAILS (by product_id):
  exampleProductDetails12012:
    {
    "id": 12012,
    "campus": "hratx",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-01-12T21:43:28.366Z",
    "updated_at": "2021-01-12T21:43:28.366Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
      ]
    },

  exampleProductDetails12013:
  {
    "id": 12013,
    "campus": "hratx",
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69.00",
    "created_at": "2021-01-12T21:43:28.366Z",
    "updated_at": "2021-01-12T21:43:28.366Z",
    "features": [
        {
            "feature": "Lenses",
            "value": "Ultrasheen"
        },
        {
            "feature": "UV Protection",
            "value": null
        },
        {
            "feature": "Frames",
            "value": "LightCompose"
        }
      ]
  },

  exampleProductDetails12014:
    {
    "id": 12014,
    "campus": "hratx",
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40.00",
    "created_at": "2021-01-12T21:43:28.366Z",
    "updated_at": "2021-01-12T21:43:28.366Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "100% Cotton"
        },
        {
            "feature": "Cut",
            "value": "Skinny"
        }
      ]
    },

  exampleProductDetails12015:
    {
    "id": 12015,
    "campus": "hratx",
    "name": "Slacker's Slacks",
    "slogan": "Comfortable for everything, or nothing",
    "description": "I'll tell you how great they are after I nap for a bit.",
    "category": "Pants",
    "default_price": "65.00",
    "created_at": "2021-01-12T21:43:28.366Z",
    "updated_at": "2021-01-12T21:43:28.366Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "99% Cotton 1% Elastic"
        },
        {
            "feature": "Cut",
            "value": "Loose"
        }
    ]
    },

  exampleProductDetails12016:
    {
    "id": 12016,
    "campus": "hratx",
    "name": "Heir Force Ones",
    "slogan": "A sneaker dynasty",
    "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    "category": "Kicks",
    "default_price": "99.00",
    "created_at": "2021-01-12T21:43:28.366Z",
    "updated_at": "2021-01-12T21:43:28.366Z",
    "features": [
        {
            "feature": "Sole",
            "value": "Rubber"
        },
        {
            "feature": "Material",
            "value": "FullControlSkin"
        },
        {
            "feature": "Mid-Sole",
            "value": "ControlSupport Arch Bridge"
        },
        {
            "feature": "Stitching",
            "value": "Double Stitch"
        }
    ]
    },

///// PRODUCT STYLES (by /products/:product_id/styles) :
///// UGH THEY ARE SO LONG!

  exampleProductStyles12012:
    {
    "product_id": "12012",
    "results": [
        {
          "style_id": 57651,
          "name": "Forest Green & Black",
          "original_price": "140.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              }
          ],
          "skus": {
              "333401": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333402": {
                  "quantity": 16,
                  "size": "S"
              },
              "333403": {
                  "quantity": 17,
                  "size": "M"
              },
              "333404": {
                  "quantity": 10,
                  "size": "L"
              },
              "333405": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333406": {
                  "quantity": 4,
                  "size": "XL"
              }
          }
      },
      {
          "style_id": 57652,
          "name": "Desert Brown & Tan",
          "original_price": "140.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
              }
          ],
          "skus": {
              "333407": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333408": {
                  "quantity": 16,
                  "size": "S"
              },
              "333409": {
                  "quantity": 17,
                  "size": "M"
              },
              "333410": {
                  "quantity": 10,
                  "size": "L"
              },
              "333411": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333412": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57653,
          "name": "Ocean Blue & Grey",
          "original_price": "140.00",
          "sale_price": "100.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              }
          ],
          "skus": {
              "333413": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333414": {
                  "quantity": 16,
                  "size": "S"
              },
              "333415": {
                  "quantity": 17,
                  "size": "M"
              },
              "333416": {
                  "quantity": 10,
                  "size": "L"
              },
              "333417": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333418": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57654,
          "name": "Digital Red & Black",
          "original_price": "140.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                  "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              }
          ],
          "skus": {
              "333419": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333420": {
                  "quantity": 16,
                  "size": "S"
              },
              "333421": {
                  "quantity": 17,
                  "size": "M"
              },
              "333422": {
                  "quantity": 10,
                  "size": "L"
              },
              "333423": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333424": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57655,
          "name": "Sky Blue & White",
          "original_price": "140.00",
          "sale_price": "100.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
          ],
          "skus": {
              "333425": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333426": {
                  "quantity": 16,
                  "size": "S"
              },
              "333427": {
                  "quantity": 17,
                  "size": "M"
              },
              "333428": {
                  "quantity": 10,
                  "size": "L"
              },
              "333429": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333430": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57656,
          "name": "Dark Grey & Black",
          "original_price": "170.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333431": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333432": {
                  "quantity": 16,
                  "size": "S"
              },
              "333433": {
                  "quantity": 17,
                  "size": "M"
              },
              "333434": {
                  "quantity": 10,
                  "size": "L"
              },
              "333435": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333436": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      }
  ]
},

  exampleProductStyles12013:
    {
    "product_id": "12013",
    "results": [
      {
          "style_id": 57657,
          "name": "Black Lenses & Black Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 57658,
          "name": "Black Lenses & Gold Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 57659,
          "name": "Gold Lenses & Black Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 57660,
          "name": "Gold Lenses & Gold Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      }
  ]
},

  exampleProductStyles12014:
    {
    "product_id": "12014",
    "results": [
        {
          "style_id": 57661,
          "name": "Black",
          "original_price": "40.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ],
          "skus": {
              "333437": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333438": {
                  "quantity": 16,
                  "size": "S"
              },
              "333439": {
                  "quantity": 17,
                  "size": "M"
              },
              "333440": {
                  "quantity": 10,
                  "size": "L"
              },
              "333441": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333442": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57662,
          "name": "Grey",
          "original_price": "40.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
          ],
          "skus": {
              "333443": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333444": {
                  "quantity": 16,
                  "size": "S"
              },
              "333445": {
                  "quantity": 17,
                  "size": "M"
              },
              "333446": {
                  "quantity": 10,
                  "size": "L"
              },
              "333447": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333448": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57663,
          "name": "Goldenrod",
          "original_price": "40.00",
          "sale_price": "35.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
              }
          ],
          "skus": {
              "333449": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333450": {
                  "quantity": 16,
                  "size": "S"
              },
              "333451": {
                  "quantity": 17,
                  "size": "M"
              },
              "333452": {
                  "quantity": 10,
                  "size": "L"
              },
              "333453": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333454": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57664,
          "name": "Maroon",
          "original_price": "40.00",
          "sale_price": "35.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ],
          "skus": {
              "333455": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333456": {
                  "quantity": 16,
                  "size": "S"
              },
              "333457": {
                  "quantity": 17,
                  "size": "M"
              },
              "333458": {
                  "quantity": 10,
                  "size": "L"
              },
              "333459": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333460": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57665,
          "name": "Chartreuse",
          "original_price": "40.00",
          "sale_price": "25.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
              }
          ],
          "skus": {
              "333461": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333462": {
                  "quantity": 16,
                  "size": "S"
              },
              "333463": {
                  "quantity": 17,
                  "size": "M"
              },
              "333464": {
                  "quantity": 10,
                  "size": "L"
              },
              "333465": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333466": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57666,
          "name": "White",
          "original_price": "40.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              }
          ],
          "skus": {
              "333467": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333468": {
                  "quantity": 16,
                  "size": "S"
              },
              "333469": {
                  "quantity": 17,
                  "size": "M"
              },
              "333470": {
                  "quantity": 10,
                  "size": "L"
              },
              "333471": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333472": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      }
  ]
},

  exampleProductStyles12015:
    {
    "product_id": "12015",
    "results": [
        {
          "style_id": 57667,
          "name": "Black",
          "original_price": "65.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333473": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333474": {
                  "quantity": 16,
                  "size": "S"
              },
              "333475": {
                  "quantity": 17,
                  "size": "M"
              },
              "333476": {
                  "quantity": 10,
                  "size": "L"
              },
              "333477": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333478": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57668,
          "name": "Olive Green",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333479": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333480": {
                  "quantity": 16,
                  "size": "S"
              },
              "333481": {
                  "quantity": 17,
                  "size": "M"
              },
              "333482": {
                  "quantity": 10,
                  "size": "L"
              },
              "333483": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333484": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57669,
          "name": "Grey",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333485": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333486": {
                  "quantity": 16,
                  "size": "S"
              },
              "333487": {
                  "quantity": 17,
                  "size": "M"
              },
              "333488": {
                  "quantity": 10,
                  "size": "L"
              },
              "333489": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333490": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57670,
          "name": "Tan",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333491": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333492": {
                  "quantity": 16,
                  "size": "S"
              },
              "333493": {
                  "quantity": 17,
                  "size": "M"
              },
              "333494": {
                  "quantity": 10,
                  "size": "L"
              },
              "333495": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333496": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57671,
          "name": "Red",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333497": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333498": {
                  "quantity": 16,
                  "size": "S"
              },
              "333499": {
                  "quantity": 17,
                  "size": "M"
              },
              "333500": {
                  "quantity": 10,
                  "size": "L"
              },
              "333501": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333502": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57672,
          "name": "Pinstripe",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333503": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333504": {
                  "quantity": 16,
                  "size": "S"
              },
              "333505": {
                  "quantity": 17,
                  "size": "M"
              },
              "333506": {
                  "quantity": 10,
                  "size": "L"
              },
              "333507": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333508": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57673,
          "name": "Khaki",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333509": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333510": {
                  "quantity": 16,
                  "size": "S"
              },
              "333511": {
                  "quantity": 17,
                  "size": "M"
              },
              "333512": {
                  "quantity": 10,
                  "size": "L"
              },
              "333513": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333514": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57674,
          "name": "Plaid",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333515": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333516": {
                  "quantity": 16,
                  "size": "S"
              },
              "333517": {
                  "quantity": 17,
                  "size": "M"
              },
              "333518": {
                  "quantity": 10,
                  "size": "L"
              },
              "333519": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333520": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 57675,
          "name": "White",
          "original_price": "65.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "333521": {
                  "quantity": 8,
                  "size": "XS"
              },
              "333522": {
                  "quantity": 16,
                  "size": "S"
              },
              "333523": {
                  "quantity": 17,
                  "size": "M"
              },
              "333524": {
                  "quantity": 10,
                  "size": "L"
              },
              "333525": {
                  "quantity": 15,
                  "size": "XL"
              },
              "333526": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      }
  ]
},

  exampleProductStyles12016:
    {
    "product_id": "12016",
    "results": [
        {
          "style_id": 57676,
          "name": "White & White",
          "original_price": "99.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ],
          "skus": {
              "333527": {
                  "quantity": 14,
                  "size": "7"
              },
              "333528": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "333529": {
                  "quantity": 9,
                  "size": "8"
              },
              "333530": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "333531": {
                  "quantity": 18,
                  "size": "9"
              },
              "333532": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "333533": {
                  "quantity": 10,
                  "size": "10"
              },
              "333534": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "333535": {
                  "quantity": 11,
                  "size": "11"
              },
              "333536": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "333537": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      },
      {
          "style_id": 57677,
          "name": "White & Red",
          "original_price": "99.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ],
          "skus": {
              "333538": {
                  "quantity": 14,
                  "size": "7"
              },
              "333539": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "333540": {
                  "quantity": 9,
                  "size": "8"
              },
              "333541": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "333542": {
                  "quantity": 18,
                  "size": "9"
              },
              "333543": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "333544": {
                  "quantity": 10,
                  "size": "10"
              },
              "333545": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "333546": {
                  "quantity": 11,
                  "size": "11"
              },
              "333547": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "333548": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      },
      {
          "style_id": 57678,
          "name": "White & Black",
          "original_price": "99.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
              }
          ],
          "skus": {
              "333549": {
                  "quantity": 14,
                  "size": "7"
              },
              "333550": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "333551": {
                  "quantity": 9,
                  "size": "8"
              },
              "333552": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "333553": {
                  "quantity": 18,
                  "size": "9"
              },
              "333554": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "333555": {
                  "quantity": 10,
                  "size": "10"
              },
              "333556": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "333557": {
                  "quantity": 11,
                  "size": "11"
              },
              "333558": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "333559": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      },
      {
          "style_id": 57679,
          "name": "White & Blue",
          "original_price": "99.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              }
          ],
          "skus": {
              "333560": {
                  "quantity": 14,
                  "size": "7"
              },
              "333561": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "333562": {
                  "quantity": 9,
                  "size": "8"
              },
              "333563": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "333564": {
                  "quantity": 18,
                  "size": "9"
              },
              "333565": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "333566": {
                  "quantity": 10,
                  "size": "10"
              },
              "333567": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "333568": {
                  "quantity": 11,
                  "size": "11"
              },
              "333569": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "333570": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      }
  ]
},

///// RELATED PRODUCTS (by /products/:product_id/related)

  exampleRelatedProducts12012:
    //12012
    [
    12013,
    12014,
    12019,
    12018
    ],

    exampleRelatedProducts12013:
    //12013
    [
    12014,
    12018,
    12017,
    12016
    ],

    exampleRelatedProducts12014:
    //12014
    [
    12016,
    12020,
    12018,
    12013,
    12012
    ],

    exampleRelatedProducts12015:
    // 12015
    [
    12012,
    12013,
    12015,
    12016,
    12019
    ],

    exampleRelatedProducts12016:
    //12016
    [
    12017,
    12017,
    12019,
    12020,
    12012,
    12014
    ]
}

export default exampleData;
