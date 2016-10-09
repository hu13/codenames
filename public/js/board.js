function run() {
    var things = JSON.parse('{"data":["apple","bag","balloon","bananas","bed","beef","blouse","book","bookmark","boom box","bottle","bottle cap","bow","bowl","box","bracelet","bread","brocolli","hair brush","buckel","button","camera","candle","candy wrapper","canvas","car","greeting card","playing card","carrots","cat","CD","cell phone","packing peanuts","cinder block","chair","chalk","newspaper","soy sauce packet","chapter book","checkbook","chocolate","clay pot","clock","clothes","computer","conditioner","cookie jar","cork","couch","credit card","cup","deodorant ","desk","door","drawer","drill press","earser","eye liner","face wash","fake flowers","flag","floor","flowers","food","fork","fridge","glass","glasses","glow stick","grid paper","hair tie","hanger","helmet","house","ipod","charger","key chain","keyboard","keys","knife","lace","lamp","lamp shade","leg warmers","lip gloss","lotion","milk","mirror","model car","money","monitor","mop","mouse pad","mp3 player","nail clippers","nail file","needle","outlet","paint brush","pants","paper","pen","pencil","perfume","phone","photo album","picture frame","pillow","plastic fork","plate","pool stick","soda can","puddle","purse","blanket","radio","remote","ring","rubber band","rubber duck","rug","rusty nail","sailboat","sand paper","sandal","scotch tape","screw","seat belt","shampoo","sharpie","shawl","shirt","shoe lace","shoes","shovel","sidewalk","sketch pad","slipper","soap","socks","sofa","speakers","sponge","spoon","spring","sticky note","stockings","stop sign","street lights","sun glasses","table","teddies","television","thermometer","thread","tire swing","tissue box","toe ring","toilet","tomato","tooth picks","toothbrush","toothpaste","towel","tree","truck","tv","twezzers","twister","vase","video games","wallet","washing machine","watch","water bottle","doll","magnet","wagon","headphones","clamp","USB drive","air freshener","piano","ice cube tray","white out","window","controller","coasters","thermostat","zipper"]}');

    // var nouns = JSON.parse('{"data":["account","achiever","acoustics","act","action","activity","actor","addition","adjustment","advertisement","advice","aftermath","afternoon","afterthought","agreement","air","airplane","airport","alarm","amount","amusement","anger","angle","animal","ants","apparatus","apparel","appliance","approval","arch","argument","arithmetic","arm","army","art","attack","attraction","aunt","authority","babies","baby","back","badge","bag","bait","balance","ball","base","baseball","basin","basket","basketball","bat","bath","battle","bead","bear","bed","bedroom","beds","bee","beef","beginner","behavior","belief","believe","bell","bells","berry","bike","bikes","bird","birds","birth","birthday","bit","bite","blade","blood","blow","board","boat","bomb","bone","book","books","boot","border","bottle","boundary","box","boy","brake","branch","brass","breath","brick","bridge","brother","bubble","bucket","building","bulb","burst","bushes","business","butter","button","cabbage","cable","cactus","cake","cakes","calculator","calendar","camera","camp","can","cannon","canvas","cap","caption","car","card","care","carpenter","carriage","cars","cart","cast","cat","cats","cattle","cause","cave","celery","cellar","cemetery","cent","chalk","chance","change","channel","cheese","cherries","cherry","chess","chicken","chickens","children","chin","church","circle","clam","class","cloth","clover","club","coach","coal","coast","coat","cobweb","coil","collar","color","committee","company","comparison","competition","condition","connection","control","cook","copper","corn","cough","country","cover","cow","cows","crack","cracker","crate","crayon","cream","creator","creature","credit","crib","crime","crook","crow","crowd","crown","cub","cup","current","curtain","curve","cushion","dad","daughter","day","death","debt","decision","deer","degree","design","desire","desk","destruction","detail","development","digestion","dime","dinner","dinosaurs","direction","dirt","discovery","discussion","distance","distribution","division","dock","doctor","dog","dogs","doll","dolls","donkey","door","downtown","drain","drawer","dress","drink","driving","drop","duck","ducks","dust","ear","earth","earthquake","edge","education","effect","egg","eggnog","eggs","elbow","end","engine","error","event","example","exchange","existence","expansion","experience","expert","eye","eyes","face","fact","fairies","fall","fang","farm","fear","feeling","field","finger","finger","fire","fireman","fish","flag","flame","flavor","flesh","flight","flock","floor","flower","flowers","fly","fog","fold","food","foot","force","fork","form","fowl","frame","friction","friend","friends","frog","frogs","front","fruit","fuel","furniture","gate","geese","ghost","giants","giraffe","girl","girls","glass","glove","gold","government","governor","grade","grain","grandfather","grandmother","grape","grass","grip","ground","group","growth","guide","guitar","gun","hair","haircut","hall","hammer","hand","hands","harbor","harmony","hat","hate","head","health","heat","hill","history","hobbies","hole","holiday","home","honey","hook","hope","horn","horse","horses","hose","hospital","hot","hour","house","houses","humor","hydrant","ice","icicle","idea","impulse","income","increase","industry","ink","insect","instrument","insurance","interest","invention","iron","island","jail","jam","jar","jeans","jelly","jellyfish","jewel","join","judge","juice","jump","kettle","key","kick","kiss","kittens","kitty","knee","knife","knot","knowledge","laborer","lace","ladybug","lake","lamp","land","language","laugh","leather","leg","legs","letter","letters","lettuce","level","library","limit","line","linen","lip","liquid","loaf","lock","locket","look","loss","love","low","lumber","lunch","lunchroom","machine","magic","maid","mailbox","man","marble","mark","market","mask","mass","match","meal","measure","meat","meeting","memory","men","metal","mice","middle","milk","mind","mine","minister","mint","minute","mist","mitten","mom","money","monkey","month","moon","morning","mother","motion","mountain","mouth","move","muscle","name","nation","neck","need","needle","nerve","nest","night","noise","north","nose","note","notebook","number","nut","oatmeal","observation","ocean","offer","office","oil","orange","oranges","order","oven","page","pail","pan","pancake","paper","parcel","part","partner","party","passenger","payment","peace","pear","pen","pencil","person","pest","pet","pets","pickle","picture","pie","pies","pig","pigs","pin","pipe","pizzas","place","plane","planes","plant","plantation","plants","plastic","plate","play","playground","pleasure","plot","plough","pocket","point","poison","pollution","popcorn","porter","position","pot","potato","powder","power","price","produce","profit","property","prose","protest","pull","pump","punishment","purpose","push","quarter","quartz","queen","question","quicksand","quiet","quill","quilt","quince","quiver","rabbit","rabbits","rail","railway","rain","rainstorm","rake","range","rat","rate","ray","reaction","reading","reason","receipt","recess","record","regret","relation","religion","representative","request","respect","rest","reward","rhythm","rice","riddle","rifle","ring","rings","river","road","robin","rock","rod","roll","roof","room","root","rose","route","rub","rule","run","sack","sail","salt","sand","scale","scarecrow","scarf","scene","scent","school","science","scissors","screw","sea","seashore","seat","secretary","seed","selection","self","sense","servant","shade","shake","shame","shape","sheep","sheet","shelf","ship","shirt","shock","shoe","shoes","shop","show","side","sidewalk","sign","silk","silver","sink","sister","sisters","size","skate","skin","skirt","sky","slave","sleep","sleet","slip","slope","smash","smell","smile","smoke","snail","snails","snake","snakes","sneeze","snow","soap","society","sock","soda","sofa","son","song","songs","sort","sound","soup","space","spade","spark","spiders","sponge","spoon","spot","spring","spy","square","squirrel","stage","stamp","star","start","statement","station","steam","steel","stem","step","stew","stick","sticks","stitch","stocking","stomach","stone","stop","store","story","stove","stranger","straw","stream","street","stretch","string","structure","substance","sugar","suggestion","suit","summer","sun","support","surprise","sweater","swim","swing","system","table","tail","talk","tank","taste","tax","teaching","team","teeth","temper","tendency","tent","territory","test","texture","theory","thing","things","thought","thread","thrill","throat","throne","thumb","thunder","ticket","tiger","time","tin","title","toad","toe","toes","tomatoes","tongue","tooth","toothbrush","toothpaste","top","touch","town","toy","toys","trade","trail","train","trains","tramp","transport","tray","treatment","tree","trees","trick","trip","trouble","trousers","truck","trucks","tub","turkey","turn","twig","twist","umbrella","uncle","underwear","unit","use","vacation","value","van","vase","vegetable","veil","vein","verse","vessel","vest","view","visitor","voice","volcano","volleyball","voyage","walk","wall","war","wash","waste","watch","water","wave","waves","wax","way","wealth","weather","week","weight","wheel","whip","whistle","wilderness","wind","window","wine","wing","winter","wire","wish","woman","women","wood","wool","word","work","worm","wound","wren","wrench","wrist","writer","writing","yak","yam","yard","yarn","year","yoke","zebra","zephyr","zinc","zipper","zoo"]}');

    var vm = new Vue({
        el: '#app',
        data: {
            numCards: 25,
            // wordList: [nouns['data'], things['data']],
            wordList: [things['data']],
            revealedCardList: [],
        },
        created: function() {
            for (var i = 0; i < this.numCards; i++) {
                this.revealedCardList[i] = false
            }
        },
        computed: {
            randomWords: function() {
                return this.getRandomWords()
            }
        },
        methods: {
            revealAgent: function(agent, agentId, id) {
                document.getElementById(agentId).setAttribute("src", agent)
                    // this.revealedCardList[id] = true is not working
                this.revealedCardList.$set(id, true) //the way to mutate an array and make its value reactive in Vue
                document.getElementById(id).setAttribute("src", agent)
            },
            isPicked: function(id) {
                return this.revealedCardList[id]
            },
            resetCard: function(agentId, id) {
                this.revealedCardList.$set(id, false)
            },
            getRandomInt: function(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            getRandomWords: function() {
                words = []
                for (var i = 0; i < this.numCards; i++) {
                    var itemId = this.getRandomInt(0, this.wordList.length)
                    words[i] = this.wordList[itemId][this.getRandomInt(0, this.wordList[itemId].length)].toUpperCase()
                }
                return words
            },
            newRound: function() {
                location.reload();
            },
            showModal: function() {
                $('.ui.basic.modal').modal('show')
            }
        }

    });
}
