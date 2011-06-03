var dict = {
    "c157d46e4dac0ed7dea3c1e1225c9ccc":"beer",
    "acc009047ecf40687e59635f76eb9772":"Quote",
    "a8745b04c488db599168596ee9d5b402":"dahtmouse",
    "2c781d1fd2bca5ca21c59c23263bec48":"The Gipper",
    "241eacc04a0d8b09b67a58fc4b1d0f48":"Frat Boi",
    "e2c59182a206361ce7aceeb9b6220b8e":"Your girl",
    "c58060eb66f1e49736d0bf19ea198ff0":"the chief",
    "334aeb12b0aed950c54ebdc4ac0d9924":"Uncle Ruckus",
    "d366bf3907f16051b50a3a272010b3d8":"Ebeneezer Scrooge",
    "a7a00d64b88105574ee921ceec1314c5":"Adolf Hitler",
    "c4982a1e3ad91d01548b80692c3c6236":"literally",
    "9e97306354aa1b18feeb5291353f0532":"Angry Thoughts",
    "be7249ed6e9e1486656b763a1ac2b78a":"Horny Virgin",
    "fb9418c5ef44469613ee26314ff20ce7":"Debbie Downer",
    "e05404bad1f76ed4b1bf8062cd6b9094":"Bitter Graduating Senior",
    "f157cfeee1b30a2238ab6f69efb2cb4b":"foreveryoung",
    "74991753b17dfe11b314d1a3baae5f3c":"trollolol",
    "ea345f397e0d0c6ff6121f79c14540db":"tits",
    "e38d5db833e3957881eeded1ba55c871":"mahdick",
    "25aecb9c2c7650efe37805172cadf15e":"Uzumaki Naruto",
    "bb9c609d2170a2fa84d191b4775ccd9a":"Alexandra Wallace",
    "acefcc24d88161666eee09497bc45aff":"Chelsea Dagger",
    "25aecb9c2c7650efe37805172cadf15e":"Mr Steal Your Girl",
    "2632dd44b86a22217cfb953e668e2ae5":"The Rabbi",
    "5600b56e847376638c872b26fbdd6661":"Belle",
    "191b643ac792f08ad3803034f8c35be8":"Buzz Killington",
    "13eb80593b58a9ff6e0096df01729e69":"Troll Science",
    "8885702d1aa369b5cf10ccdab038e957":"DosiRock",
    "4d2192b255d112cdf013249f55e14e56":"Legally Bland",
    "f7dd282c24105a4fb3647f9e48256cec":"SHOTS FAIRY",
    "5df886c1a3f591bdbea5b1243b7fc615":"Bee",
    "90f7ba2e4d30acd62b9a94a9d276fe84":"SS",
    "8c21dfaf64b7d264a17df8911ddb4578":"BW",
    "2a7f8b37a8f870e9fe44ae22182a154c":"PP",
    "1b4d646cf502ed65a0ee7c2658742a25":"NZ?"
};

var replies = $('span[id^="reply"] a')
for (var i = 0; i < replies.length; i++) {
    var click = replies[i].getAttribute('onclick');
    var hash = click.substring(25, 57);
    var id = click.substring(60, 67);

    if (hash in dict) {
        hash = '<strong>'+dict[hash]+'</strong>';
    }

    id = '#reply'+id;
    if ($(id) && $(id).attr('marked') != 'true') {
        $(id).attr('marked', 'true');
        $(id).prev().append(' &#8226; ' + hash).css('color','black');
    }
}
