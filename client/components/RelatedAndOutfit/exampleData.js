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