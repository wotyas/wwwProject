(function lull(){

    var app=angular.module('albums', []);
    app.controller('AlbumsController',function(){

        this.products = data_albums;

    });

    app.controller("PanelController",function(){
        this.tab = 1;
        this.selectTab = function(selectedTab) {
            this.tab = selectedTab;
        };

        this.isSelected = function(selectedTab) {
            return this.tab === selectedTab;
        };
    });

    app.controller("ReviewController",function(){
        this.review={};
        this.addReview=function(product) {
            product.reviews.push(this.review);
            this.review={};
        };
    });

    var data_albums = [
        {
        name        : 'Eterno Agosto',
        description : 'Eterno Agosto – debiutancki album studyjny hiszpańskiego piosenkarza Álvaro Solera. Wydawnictwo ukazało się 23 czerwca 2015 nakładem wytwórni muzycznych Airforce 1 Records i Universal Music. Album zawiera 13 utworów. Teksty dotyczą osobistych przeżyć autora[. Tematem przewodnim płyty jest miłość oraz rozstania. Nie brakuje wspomnień dotyczących zabaw z przyjaciółmi („Tengo un sientimento”) czy tekstów poważniejszych, jak „El camino”.',
        images      : [ {
            thumb: 'images/aagosto.jpg'
        }
        ],
        reviews: [ {
            stars  :5,
            body   :"I love this product!",
            author :"joe@thomas.com"
        },
            {
                stars  :1,
                body   :"This product sucks",
                author :"tim@hater.com"
            } ]
        },
        {
            name        : 'Minione',
            description : 'Płyta „Minione” to wskrzeszenie najpiękniejszych przedwojennych tang polskich. AMJ śpiewa je z kubańskim trio jednego z największych pianistów improwizujących naszych czasów - fenomenalnym Gonzalo Rubalcabą. Spośród setek starych tang i boler artyści wybrali te, które inspirują ich najbardziej (m.in. „To ostatnia niedziela", „Rebeka", „Twe usta kłamią”) i mogły stać się pomostem między tym co minione, światem lat 30-tych ubiegłego stulecia a współczesną muzyką wokalną. Pomostem między kulturami - polską, kubańską, żydowską, argentyńską i amerykańską.',
            images      : [ {
                thumb: 'images/aminione.jpg'
            }
            ],
            reviews: [ {
                stars  :5,
                body   :"I love this product!",
                author :"joe@thomas.com"
            },
                {
                    stars  :1,
                    body   :"This product sucks",
                    author :"tim@hater.com"
                } ]
        },
        {
            name        : 'Forever Child',
            description : 'Drugi album studyjny polskiej piosenkarki Agnieszki Chylińskiej. Wydawnictwo ukazało się 30 września 2016 roku nakładem wytwórni muzycznej Pomaton/Warner Music Poland. Pod względem muzycznym płyta łączy w sobie przede wszystkim, rock oraz rock elektroniczny. Muzykę skomponowali Bartek Królik i Marek Piotrowski, natomiast teksty napisała sama piosenkarka. Album zadebiutował na 1. miejscu polskiej listy przebojów – OLiS. Płyta znalazła się również na 44. pozycji na liście sprzedaży w Szwecji. 8 listopada 2016 roku płyta uzyskała status platynowej płyty za sprzedaż w ponad 30 tysiącach kopii. Nagrania były promowane dwoma teledyskami do utworów „Kiedy przyjdziesz do mnie” i „Królowa łez”.',
            images      : [ {
                thumb: 'images/aforeverchild.jpg'
            }
            ],
            reviews: [ {
                stars  :5,
                body   :"I love this product!",
                author :"joe@thomas.com"
            },
                {
                    stars  :1,
                    body   :"This product sucks",
                    author :"tim@hater.com"
                } ]
        }
        ];

})();
