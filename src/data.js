
const PRODUCTS = [
    {
        id:'01',
        name :"house 01",
        images: [
            "https://i.imgur.com/5iNAL9T.jpeg",
            "https://i.imgur.com/nZnWUc0.jpeg",
            "https://i.imgur.com/nZnWUc0.jpeg",

        ],
        videos: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],

        items: [{
            "id": 31,
            "title": "Electronic Fresh Gloves",
            "price": 705,
            "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
            "images": [
                "https://i.imgur.com/kTPCFG2.jpeg",
                "https://i.imgur.com/RLnJJyQ.jpeg",
                "https://i.imgur.com/nZnWUc0.jpeg"
            ],
            "creationAt": "2023-10-17T08:39:11.000Z",
            "updatedAt": "2023-10-17T08:39:11.000Z",
            "category": {
                "id": 1,
                "name": "Clothes",
                "image": "https://i.imgur.com/s8WRA2O.jpeg",
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z"
            }
        },
            {
                "id": 32,
                "title": "Small Bronze Pants",
                "price": 197,
                "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                "images": [
                    "https://i.imgur.com/nCqOV7L.jpeg",
                    "https://i.imgur.com/s8WRA2O.jpeg",
                    "https://i.imgur.com/fpT4052.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 1,
                    "name": "Clothes",
                    "image": "https://i.imgur.com/s8WRA2O.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 33,
                "title": "Small Wooden Chips",
                "price": 475,
                "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                "images": [
                    "https://i.imgur.com/M3QKiC5.jpeg",
                    "https://i.imgur.com/DumuKkD.jpeg",
                    "https://i.imgur.com/OLKMwgP.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 2,
                    "name": "Electronics",
                    "image": "https://i.imgur.com/DumuKkD.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 34,
                "title": "Licensed Plastic Ball",
                "price": 126,
                "description": "The Football Is Good For Training And Recreational Purposes",
                "images": [
                    "https://i.imgur.com/kTPCFG2.jpeg",
                    "https://i.imgur.com/0KlqHu9.jpeg",
                    "https://i.imgur.com/QEGACen.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 5,
                    "name": "Others",
                    "image": "https://i.imgur.com/GwylUgV.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 35,
                "title": "Rustic Soft Mouse",
                "price": 569,
                "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                "images": [
                    "https://i.imgur.com/5mPmJYO.jpeg",
                    "https://i.imgur.com/uDpzwEk.jpeg",
                    "https://i.imgur.com/kTPCFG2.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 4,
                    "name": "Shoes",
                    "image": "https://i.imgur.com/OLKMwgP.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 36,
                "title": "Modern Bronze Shoes",
                "price": 618,
                "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                "images": [
                    "https://i.imgur.com/gxaUWSF.jpeg",
                    "https://i.imgur.com/Dm2pPfd.jpeg",
                    "https://i.imgur.com/nZnWUc0.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 4,
                    "name": "Shoes",
                    "image": "https://i.imgur.com/OLKMwgP.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 37,
                "title": "Rustic Plastic Chips",
                "price": 679,
                "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                "images": [
                    "https://i.imgur.com/GwylUgV.jpeg",
                    "https://i.imgur.com/imQx3Az.jpeg",
                    "https://i.imgur.com/imQx3Az.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 2,
                    "name": "Electronics",
                    "image": "https://i.imgur.com/DumuKkD.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
           ]
    }
    , {
        id: '02',
      
        images: [
            "https://i.imgur.com/5iNAL9T.jpeg",
            "https://i.imgur.com/nZnWUc0.jpeg",
            "https://i.imgur.com/nZnWUc0.jpeg",

        ],  name: "house 02",
        videos: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],

        items: [{
            "id": 19,
            "title": "Small Concrete Chips",
            "price": 105,
            "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
            "images": [
                "https://i.imgur.com/nZnWUc0.jpeg",
                "https://i.imgur.com/QEGACen.jpeg",
                "https://i.imgur.com/DumuKkD.jpeg"
            ],
            "creationAt": "2023-10-17T08:39:11.000Z",
            "updatedAt": "2023-10-17T08:39:11.000Z",
            "category": {
                "id": 3,
                "name": "Furniture",
                "image": "https://i.imgur.com/fpT4052.jpeg",
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z"
            }
        },
            {
                "id": 20,
                "title": "Electronic Steel Gloves",
                "price": 496,
                "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                "images": [
                    "https://i.imgur.com/5iNAL9T.jpeg",
                    "https://i.imgur.com/00qWleT.jpeg",
                    "https://i.imgur.com/rDC2jWQ.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 1,
                    "name": "Clothes",
                    "image": "https://i.imgur.com/s8WRA2O.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 21,
                "title": "Gorgeous Fresh Chips",
                "price": 674,
                "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                "images": [
                    "https://i.imgur.com/nZnWUc0.jpeg",
                    "https://i.imgur.com/GwylUgV.jpeg",
                    "https://i.imgur.com/OARGZQW.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 4,
                    "name": "Shoes",
                    "image": "https://i.imgur.com/OLKMwgP.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 22,
                "title": "Tasty Soft Soap",
                "price": 393,
                "description": "The Football Is Good For Training And Recreational Purposes",
                "images": [
                    "https://i.imgur.com/M3QKiC5.jpeg",
                    "https://i.imgur.com/QEGACen.jpeg",
                    "https://i.imgur.com/OARGZQW.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 4,
                    "name": "Shoes",
                    "image": "https://i.imgur.com/OLKMwgP.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 23,
                "title": "Licensed Steel Shirt",
                "price": 88,
                "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                "images": [
                    "https://i.imgur.com/Dm2pPfd.jpeg",
                    "https://i.imgur.com/nCqOV7L.jpeg",
                    "https://i.imgur.com/aCDF0yh.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 2,
                    "name": "Electronics",
                    "image": "https://i.imgur.com/DumuKkD.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 24,
                "title": "Intelligent Rubber Hat",
                "price": 303,
                "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "images": [
                    "https://i.imgur.com/M3QKiC5.jpeg",
                    "https://i.imgur.com/G45P8tI.jpeg",
                    "https://i.imgur.com/kTPCFG2.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 4,
                    "name": "Shoes",
                    "image": "https://i.imgur.com/OLKMwgP.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
          
        ]
    },
    {
        id: '03',
        name: "house 03",
        videos: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],

        images: [
            "https://i.imgur.com/5iNAL9T.jpeg",
            "https://i.imgur.com/nZnWUc0.jpeg",
            "https://i.imgur.com/nZnWUc0.jpeg",
            
        ],
        items: [{
            "id": 12,
            "title": "nuevo titulo",
            "price": 134,
            "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
            "images": [
                "https://i.imgur.com/5iNAL9T.jpeg",
                "https://i.imgur.com/nZnWUc0.jpeg",
                "https://i.imgur.com/GwylUgV.jpeg"
            ],
            "creationAt": "2023-10-17T08:39:11.000Z",
            "updatedAt": "2023-10-17T12:41:11.000Z",
            "category": {
                "id": 5,
                "name": "Others",
                "image": "https://i.imgur.com/GwylUgV.jpeg",
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z"
            }
        },
            {
                "id": 13,
                "title": "Intelligent Wooden Shirt",
                "price": 473,
                "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                "images": [
                    "https://i.imgur.com/Y5gHJMd.jpeg",
                    "https://i.imgur.com/0KlqHu9.jpeg",
                    "https://i.imgur.com/kTPCFG2.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 3,
                    "name": "Furniture",
                    "image": "https://i.imgur.com/fpT4052.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 14,
                "title": "Licensed Frozen Cheese",
                "price": 391,
                "description": "The Football Is Good For Training And Recreational Purposes",
                "images": [
                    "https://i.imgur.com/lVH533g.jpeg",
                    "https://i.imgur.com/GwylUgV.jpeg",
                    "https://i.imgur.com/M3QKiC5.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 2,
                    "name": "Electronics",
                    "image": "https://i.imgur.com/DumuKkD.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 16,
                "title": "Fantastic Fresh Chips",
                "price": 439,
                "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                "images": [
                    "https://i.imgur.com/aCDF0yh.jpeg",
                    "https://i.imgur.com/lVH533g.jpeg",
                    "https://i.imgur.com/RQL19O6.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 1,
                    "name": "Clothes",
                    "image": "https://i.imgur.com/s8WRA2O.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 17,
                "title": "Generic Concrete Table",
                "price": 524,
                "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                "images": [
                    "https://i.imgur.com/lVH533g.jpeg",
                    "https://i.imgur.com/Dm2pPfd.jpeg",
                    "https://i.imgur.com/Dm2pPfd.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 3,
                    "name": "Furniture",
                    "image": "https://i.imgur.com/fpT4052.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },
            {
                "id": 18,
                "title": "Handcrafted Steel Shirt",
                "price": 408,
                "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                "images": [
                    "https://i.imgur.com/rDC2jWQ.jpeg",
                    "https://i.imgur.com/OARGZQW.jpeg",
                    "https://i.imgur.com/zQwsC2m.jpeg"
                ],
                "creationAt": "2023-10-17T08:39:11.000Z",
                "updatedAt": "2023-10-17T08:39:11.000Z",
                "category": {
                    "id": 2,
                    "name": "Electronics",
                    "image": "https://i.imgur.com/DumuKkD.jpeg",
                    "creationAt": "2023-10-17T08:39:11.000Z",
                    "updatedAt": "2023-10-17T08:39:11.000Z"
                }
            },

        ]
    },
];


export default  PRODUCTS