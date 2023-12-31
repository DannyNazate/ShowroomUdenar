var APP_DATA = {
    "scenes": [{
            "id": "0-udenar_1",
            "name": "Udenar_1",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "yaw": 0.003292935435684541,
                "pitch": 0.5307625043074466,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                "yaw": 0.052253189236836306,
                "pitch": 0.28999170660941154,
                "rotation": 0,
                "target": "1-udenar_2"
            }],
<<<<<<< HEAD
            "infoHotspots": [
                /*{
                    "yaw": -0.4630409400119717,
                    "pitch": 0.1903530246810874,
                    "title": "Title",
                    "text": "",

                },
                {
                    "yaw": 0.4280508766354867,
                    "pitch": 0.17927346803086763,
                    "title": "Instrucciones",
                    "text": ""
                }*/
=======
            "infoHotspots": [{

                },

>>>>>>> 7b26b9554e52cc447fdd6d6189c07299974142f5
            ]
        },
        {
            "id": "1-udenar_2",
            "name": "Udenar_2",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                    "yaw": -3.118380084693033,
                    "pitch": 0.3257149264186836,
                    "rotation": 0,
                    "target": "0-udenar_1"
                },
                {
                    "yaw": 0.00011701354325133195,
                    "pitch": 0.11153434788703365,
                    "rotation": 0,
                    "target": "2-pasillo_1"
                }
            ],
            "infoHotspots": [],



        },
        {
            "id": "2-pasillo_1",
            "name": "Entrada Principal",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                    "yaw": 3.0985571047940095,
                    "pitch": 0.28672326808585424,
                    "rotation": 0,
                    "target": "1-udenar_2"
                },
                {
                    "yaw": -0.007133296553565316,
                    "pitch": 0.34698285430152254,
                    "rotation": 0,
                    "target": "3-pasillo_2"
                },
                {
                    "yaw": -1.0065365074730614,
                    "pitch": 0.3793354925204877,
                    "rotation": 5.497787143782138,
                    "target": "6-fac_exactas"
                },
                {
                    "yaw": 0.8441893344773348,
                    "pitch": 0.4373325519908704,
                    "rotation": 0.7853981633974483,
                    "target": "5-fac_administrativas"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "3-pasillo_2",
            "name": "Seguir al Pasillo 2",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                    "yaw": 2.9763163961484747,
                    "pitch": 0.38217897320355476,
                    "rotation": 0,
                    "target": "2-pasillo_1"
                },
                {
                    "yaw": 0.07037168553381079,
                    "pitch": 0.26024398668442217,
                    "rotation": 0,
                    "target": "4-pasillo_3"
                },
                {
                    "yaw": -0.8048332514975396,
                    "pitch": 0.258239116150639,
                    "rotation": 18.06415775814132,
                    "target": "8-fac_ingenieria"
                },
                {
                    "yaw": 1.1596355714937658,
                    "pitch": 0.31418349979372096,
                    "rotation": 7.0685834705770345,
                    "target": "7-fac_agricolas"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "4-pasillo_3",
            "name": "Seguir al Pasillo 3",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                    "yaw": 3.0876112756455214,
                    "pitch": 0.4075737522366296,
                    "rotation": 0,
                    "target": "3-pasillo_2"
                },
                {
                    "yaw": -0.5685368363045118,
                    "pitch": 0.2602003918886773,
                    "rotation": 5.497787143782138,
                    "target": "9-fac_artes"
                },
                {
                    "yaw": 0.8350533511177414,
                    "pitch": 0.27875599844003496,
                    "rotation": 38.48451000647497,
                    "target": "10-fac_salud"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "5-fac_administrativas",
            "name": "Ingresar a FACEA",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                "yaw": -2.92438267044815,
                "pitch": 0.7620099679558976,
                "rotation": 0,
                "target": "2-pasillo_1"
            }],
            "infoHotspots": [{
                    "yaw": -0.4754933923792244,
                    "pitch": -0.00012871734662981,
                    "title": "Title",
                    "text": "",
                    "id": "imgfaceadministracionempresas",
                    "texto": "Administración de Empresas"
                },
                {
                    "yaw": 0.19448527013041073,
                    "pitch": -0.00010002571061314,
                    "title": "Title",
                    "text": "",
                    "id": "imgfaceacomercio",
                    "texto": "Comercio Internacional"
                }
            ]
        },
        {
            "id": "6-fac_exactas",
            "name": "Ingresar a FACIA",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                "yaw": 3.0496669467745114,
                "pitch": 0.7782252857703433,
                "rotation": 0,
                "target": "2-pasillo_1"
            }],
            "infoHotspots": [{
                    "yaw": -0.45561827299068014,
                    "pitch": -0.06112132053418051,
                    "title": "Title",
                    "text": "",
                    "id": "imgfaciainformatica",
                    "texto": "Licenciatura en Informática"
                },
                {
                    "yaw": 0.2731610959231183,
                    "pitch": 0.04058700836342042,
                    "title": "Title",
                    "text": "",
                    "id": "imgfaciafisica",
                    "texto": "Física"

                },
                {
                    "yaw": 0.04296029222785691,
                    "pitch": 0.32967525848337154,
                    "title": "Title",
                    "text": "Text"
                }
            ]
        },
        {
            "id": "7-fac_agricolas",
            "name": "Ingresar a Fac. Ciencias Agrícolas",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                "yaw": -2.522680738830161,
                "pitch": 0.8791891699331504,
                "rotation": 11.780972450961727,
                "target": "3-pasillo_2"
            }],
            "infoHotspots": [{
                    "yaw": 0.0041763959154845764,
                    "pitch": 0.07263735625348033,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacambiental",
                    "texto": "Ingenieria Ambiental"
                },
                {
                    "yaw": -0.7743887923378421,
                    "pitch": 0.07263735625348033,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacagronomica",
                    "texto": "Ingenieria Agronómica"
                },

            ]
        },
        {
            "id": "8-fac_ingenieria",
            "name": "Ingresar a Facultad de Ingeniería",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                "yaw": 2.774434671988833,
                "pitch": 0.7349507289742476,
                "rotation": 0.7853981633974483,
                "target": "3-pasillo_2"
            }],
            "infoHotspots": [{
                    "yaw": 0.4272980747447846,
                    "pitch": 0.10000000457,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacingsistemas",
                    "texto": "Ingeniería en Sistemas"

                },
                {
                    "yaw": 0.12898899511722511,
                    "pitch": 0.0813812573808583,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacingelectronica",
                    "texto": "Ingeniería Electrónica"
                },
                {
                    "yaw": 0.7044977322435031,
                    "pitch": 0.07813812573808583,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacingcivil",
                    "texto": "Ingeniería Civil"
                }
            ]
        },
        {
            "id": "9-fac_artes",
            "name": "Facultad de Artes",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                "yaw": 2.8489538262412655,
                "pitch": 0.8482390038900167,
                "rotation": 0.7853981633974483,
                "target": "4-pasillo_3"
            }],
            "infoHotspots": [{
                    "yaw": -0.20272980747447846,
                    "pitch": 0.0035299550294765,
                    "title": "Arquitectura",
                    "text": "",
                    "id": "imgfacartesgrafico",
                    "texto": "Diseño Gráfico"
                },
                {
                    "yaw": -0.47610891578772474,
                    "pitch": 0.3292317600872444,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacartesarquitectura",
                    "texto": "Arquitectura"
                },
                {
                    "yaw": 0.09768104359252092,
                    "pitch": 0.32923176008776157,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacartesmusica",
                    "texto": "Licenciatura en Música"
                }
            ]
        },
        {
            "id": "10-fac_salud",
            "name": "Facultad de Ciencias de la Salud",
            "levels": [{
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [{
                "yaw": -2.8581825888663346,
                "pitch": 0.8214342380962236,
                "rotation": 12.566370614359176,
                "target": "4-pasillo_3"
            }],
            "infoHotspots": [{
                    "yaw": -0.561063541182013,
                    "pitch": -0.11800330501115006,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacsaludmedicina",
                    "texto": "Medicina"
                },
                {
                    "yaw": -0.04743390491962458,
                    "pitch": -0.210016,
                    "title": "Title",
                    "text": "",
                    "id": "imgfacsaludpromsalud",
                    "texto": "Promoción de la Salud"
                }
            ]
        }
    ],
    "name": "Project Title",
    "settings": {
        "mouseViewMode": "drag",
        "autorotateEnabled": true,
        "fullscreenButton": true,
        "viewControlButtons": true
    }
};