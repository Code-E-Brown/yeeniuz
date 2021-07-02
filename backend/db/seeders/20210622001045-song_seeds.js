'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Songs', [
      {
        artistId: 1,
        userId: 1,
        title: 'Flashing Lights',
        tagId: 1,
        lyrics: "<p>Flashing lights (lights, lights, lights)</p><p>Flashing lights (lights, lights, lights)</p><p>Flashing lights (lights, lights, lights)</p><p>Flashing lights (lights, lights)</p><p>She don't believe in shooting stars</p><p>But she believe in shoes &amp; cars</p><p>Wood floors in the new apartment</p><p>Couture from the store's department</p><p>You more like L'eau de Stardee shit</p><p>I'm more of the, trips to Florida</p><p>Order the h'orderves, views of the water</p><p>Straight from the page of your favorite author</p><p>And the weather so breezy</p><p>Man why can't life always be this easy</p><p>She in the mirror dancing so sleazy</p><p>I get a call like 'Where are you Yeezy?'</p><p>And try to hit you with a 'Oeur de Whopee'</p><p>Till I get flashed by the paparazzi</p><p>Damn, these nigga's got me</p><p>I hate these nigga's more than a Nazi</p><p>As I recall, I know you love to show off</p><p>But I never thought that you would take it this far</p><p>What do I know?</p><p>Flashing lights (lights, lights, lights)</p><p>What do I know?</p><p>Flashing lights (lights, lights, lights)</p><p>I know it's been a while</p><p>Sweetheart, we hardly talk, I was doing my thing</p><p>I know I was foul bae-bae</p><p>A-bay lately you been all on my brain</p><p>And if somebody would've told me a month ago</p><p>Fronting though, yo I wouldn't wanna know</p><p>If somebody would've told me a year ago</p><p>It'd go, get this difficult</p><p>Feeling like Katrina with no Fema</p><p>Like Martin with no Gina</p><p>Like a flight with no Visa</p><p>First class with the seat back I still see ya</p><p>In my past, you on the other side of the glass</p><p>Of my memory's museum</p><p>I'm just saying, hey Mona Lisa</p><p>Come home you know you can't roam without Caesar</p><p>As I recall, I know you love to show off</p><p>But I never thought that you would take it this far</p><p>What do I know?</p><p>Flashing lights (lights, lights, lights)</p><p>What do I know?</p><p>Flashing lights (lights, lights, lights)</p><p>As you recall, you know I love to show off</p><p>But you never thought that I would take it this far</p><p>What do you know?</p><p>Flashing lights (lights, lights, lights)</p><p>What do you know?</p><p>Flashing lights (lights, lights, lights)</p><p>Flashing lights (lights, lights, lights)</p><p>Flashing lights</p>",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71+JZba5PuL._AC_UL600_SR600,600_.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=mWtIxc38xNE'
      },
      {
        artistId: 1,
        userId: 1,
        title: 'Everything we Need',
        tagId: 6,
        lyrics: "<p>We began after the storm inside</p><p>Lay the land, it's just the morning light</p><p>Switch your, switch your attitude</p><p>Go 'head, level up yourself</p><p>This that different latitude</p><p>(Ooh-ooh, ooh-ooh)</p><p>Life too short, go spoil yourself</p><p>Feel that feel, enjoy yourself</p><p>'Cause we have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need</p><p>We began after the storm inside</p><p>Lay the land, it's just the morning light</p><p>Switch my, switch my attitude</p><p>I'm so, I'm so radical</p><p>All these people mad at dude</p><p>This for who it matter to</p><p>What if Eve made apple juice?</p><p>You gon' do what Adam do?</p><p>Or say, 'Baby, let's put this back on the tree'</p><p>'Cause we have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need (Ooh-ooh, ooh-ooh)</p><p>We have everything we need</p><p>We began after the storm inside</p><p>Lay the land, it's just the morning light</p>",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Kanye_West_-_Jesus_Is_King.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=Mrfu0FBB110'
      },
      {
        artistId: 2,
        userId: 1,
        title: 'Aerials',
        tagId: 3,
        lyrics: "<p>Life is a waterfall</p><p>We're one in the river</p><p>And one again after the fall</p><p>Swimming through the void, we hear the word</p><p>We lose ourselves, but we find it all</p><p>'Cause we are the ones that want to play</p><p>Always want to go, but you never want to stay</p><p>And we are the ones that want to choose</p><p>Always want to play but you never want to lose</p><p>Aerials in the sky</p><p>When you lose small mind, you free your life</p><p>Life is a waterfall</p><p>We drink from the river</p><p>Then we turn around and put up our walls</p><p>Swimming through the void, we hear the word</p><p>We lose ourselves, but we find it all</p><p>'Cause we are the ones that want to play</p><p>Always want to go, but you never want to stay</p><p>And we are the ones that want to choose</p><p>Always want to play but you never want to lose</p><p>Oh</p><p>Aerials in the sky</p><p>When you lose small mind, you free your life</p><p>Aerials, so up high</p><p>When you free your eyes, eternal prize</p><p>Aerials in the sky</p><p>When you lose small mind, you free your life</p><p>Aerials, so up high</p><p>When you free your eyes, eternal prize</p><p>Oh-oh-oh, oh-oh-oh</p><p>Oh-oh-oh, oh-oh-oh, oh-oh-oh</p><p>Oh-oh-oh, oh-oh-oh</p><p>Oh-oh-oh, oh-oh-oh, oh-oh-oh</p>",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=L-iepu3EtyE'
      },
      {
        artistId: 3,
        userId: 1,
        title: 'Laugh Now Cry Later',
        tagId: 1,
        lyrics: "<p>Life is a waterfall</p><p>We're one in the river</p><p>And one again after the fall</p><p>Swimming through the void, we hear the word</p><p>We lose ourselves, but we find it all</p><p>'Cause we are the ones that want to play</p><p>Always want to go, but you never want to stay</p><p>And we are the ones that want to choose</p><p>Always want to play but you never want to lose</p><p>Aerials in the sky</p><p>When you lose small mind, you free your life</p><p>Life is a waterfall</p><p>We drink from the river</p><p>Then we turn around and put up our walls</p><p>Swimming through the void, we hear the word</p><p>We lose ourselves, but we find it all</p><p>'Cause we are the ones that want to play</p><p>Always want to go, but you never want to stay</p><p>And we are the ones that want to choose</p><p>Always want to play but you never want to lose</p><p>Oh</p><p>Aerials in the sky</p><p>When you lose small mind, you free your life</p><p>Aerials, so up high</p><p>When you free your eyes, eternal prize</p><p>Aerials in the sky</p><p>When you lose small mind, you free your life</p><p>Aerials, so up high</p><p>When you free your eyes, eternal prize</p><p>Oh-oh-oh, oh-oh-oh</p><p>Oh-oh-oh, oh-oh-oh, oh-oh-oh</p><p>Oh-oh-oh, oh-oh-oh</p><p>Oh-oh-oh, oh-oh-oh, oh-oh-oh</p>",
        imageUrl: 'https://images.genius.com/91898b20d4aef30e63e10195474f3680.1000x1000x1.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=JFm7YDVlqnI'
      },
      {
        artistId: 4,
        userId: 1,
        title: 'pov',
        tagId: 2,
        lyrics: "<p>It's like you got superpowers</p><p>Turn my minutes into hours</p><p>You got more than 20-20, babe</p><p>Made of glass the way you see through me</p><p>You know me better than I do</p><p>Can't seem to keep nothing from you</p><p>How you touch my soul from the outside?</p><p>Permeate my ego and my pride</p><p>I wanna love me (ooh)</p><p>The way that you love me (ooh)</p><p>Ooh, for all of my pretty</p><p>And all of my ugly too</p><p>I'd love to see me from your point of view</p><p>I wanna trust me (trust me)</p><p>The way that you trust me (trust me)</p><p>Ooh, 'cause nobody ever loved me like you do</p><p>I'd love to see me from your point of view</p><p>I'm gеtting used to receiving</p><p>Still gеtting good at not leaving</p><p>I'ma love you even though I'm scared (oh, scared)</p><p>Learnin' to be grateful for myself (oh, oh, oh)</p><p>You love my lips 'cause they say the</p><p>Things we've always been afraid of</p><p>I can feel it startin' to subside</p><p>Learnin' to believe in what is mine</p><p>I wanna love me (ooh)</p><p>The way that you love me (ooh)</p><p>Ooh, for all of my pretty</p><p>And all of my ugly too</p><p>I'd love to see me from your point of view</p><p>I wanna trust me (trust me)</p><p>The way that you trust me (trust me)</p><p>Ooh, 'cause nobody ever loved me like you do</p><p>I'd love to see me from your point of view</p><p>I couldn't believe it or see it for myself</p><p>Boy, I be impatient, but now I'm out here</p><p>Fallin', fallin', frozen, slowly</p><p>Fallin', got me right</p><p>I won't keep you waitin' (waitin')</p><p>All my baggage fadin' safely (my baggage fadin')</p><p>And if my eyes deceive me</p><p>Won't let them stray too far away, I</p><p>I wanna love me (ooh)</p><p>The way that you love me (ooh)</p><p>Ooh, for all of my pretty</p><p>And all of my ugly too</p><p>I'd love to see me from your point of view</p><p>I wanna trust me, ooh (trust me)</p><p>The way that you trust me, baby (trust me)</p><p>'Cause nobody ever loved me like you do</p><p>I'd love to see me from your point of view (oh)</p><p>Yeah</p>",
        imageUrl: 'https://i.ibb.co/ssW7Ngb/Ari-gurl.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=nQJEp-k-ogs'
      },
      {
        artistId: 5,
        userId: 1,
        title: 'Buy U a Drank',
        tagId: 4,
        lyrics: "<p>Shawty snap (yeah)</p><p>T-pain</p><p>Damn</p><p>Shawty snap</p><p>Young joc (shawty)</p><p>Ay ay</p><p>She snappin</p><p>Ah she snappin</p><p>Shawty snappin</p><p>Snap ya fingers do ya step you can do it all by yourself</p><p>Baby girl</p><p>Whats your name</p><p>Let me talk to you</p><p>Let me buy you a drink</p><p>I'm t-pain, you know me</p><p>Konvict music nappy boy ooh wee</p><p>I know da club close at 3</p><p>Whats the chance of you rollin wit me</p><p>Back to the crib</p><p>Show you how I live</p><p>Lets get drunk forget what we did</p><p>I'mma buy you a drank</p><p>Then i'mma take you home with me</p><p>I got money in the bank</p><p>Shawty whachu think bout that</p><p>I'll be in the grey cadillac</p><p>We in the bed like</p><p>Ooh ooh ohh, ooh ooh</p><p>We in the bed like</p><p>Ooh ooh ooh, ooh ooh</p><p>Talk to me, i talk back</p><p>Lets talk money, i talk that</p><p>Crunk juice bombs</p><p>Oakley shades</p><p>Shawty got class</p><p>Oh behave</p><p>Lets get gone</p><p>Walk it out (walk it out)</p><p>Just like that</p><p>That's what I'm talkin' bout</p><p>We gone have fun</p><p>You gone see</p><p>On that patron</p><p>You should get like me</p><p>I'mma buy you a drank</p><p>Then i'mma take you home with me</p><p>I got money in the bank</p><p>Shawty whachu think bout that</p><p>I'll be in the grey cadillac</p><p>We in the bed like</p><p>Ooh ooh ohh, ooh ooh</p><p>We in the bed like</p><p>Ooh ooh ooh, ooh ooh</p><p>Won't you meet me at the bar</p><p>Respect big pimpin'</p><p>Tell me how you feel</p><p>Mama tell me what you sippin'</p><p>A certified dime piece</p><p>Deserve Louis 13</p><p>150 a shot</p><p>3 for you and 3 for me</p><p>I'm checkin' yo body language</p><p>I love the conversation</p><p>And when you lick your lips</p><p>I get a tinglin' sensation</p><p>Now were both bout tipsy</p><p>You say you in the mood</p><p>All i need is bout a hour</p><p>Better yet maybe two</p><p>Let me take you where i live</p><p>Ferrari switch gears</p><p>When i whisper in ya ear</p><p>Ya legs hit the chandelier</p><p>Passion fruit and sex</p><p>All in the atmosphere</p><p>I'mma let t-pain sing it</p><p>So he can make it clear</p><p>I'mma buy you a drank</p><p>Then i'mma take you home with me</p><p>I got money in the bank</p><p>Shawty whachu think bout that</p><p>I'll be in the grey cadillac</p><p>We in the bed like</p><p>Ooh ooh ohh, ooh ooh</p><p>We in the bed like</p><p>Ooh ooh ooh, ooh ooh</p><p>I'mma buy you a drank</p><p>Then i'mma take you home with me</p><p>I got money in the bank</p><p>Shawty whachu think bout that</p><p>I'll be in the grey cadillac</p><p>We in the bed like</p><p>Ooh ooh ohh, ooh ooh</p><p>We in the bed like</p><p>Ooh ooh ooh, ooh ooh</p><p>Lets get gone</p><p>Walk it out</p><p>(Now walk it out think bout it, aaahhh snap)</p><p>Now rock rock rock rock</p><p>You can do it all by yo'self</p><p>I'mma buy you a drank</p><p>Then i'mma take you home with me</p><p>I got money in the bank</p><p>Shawty whachu think bout that</p><p>I'll be in the grey cadillac</p><p>We in the bed like</p><p>Ooh ooh ohh, ooh ooh</p><p>We in the bed like</p><p>Ooh ooh ooh, ooh ooh</p>",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81z6NjsreOL._SL1500_.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=dBrRBZy8OTs'
      },
      {
        artistId: 7,
        userId: 1,
        title: 'Touch my Body',
        tagId: 4,
        lyrics: "<p>MC, uh uh uh</p><p>In the place to be (oh yeah, oh yeah, oh yeah)</p><p>I know that you been waitin' for it, I'm waitin' too</p><p>In my imagination I be all up on you</p><p>I know you got that fever for me hundred and two</p><p>And boy I know I feel the same my temperature's through the roof</p><p>If it's a camera up in here</p><p>Then it's gonna leave with me when I do, I do</p><p>If it's a camera up in here</p><p>Then I best not catch this flick on YouTube, YouTube</p><p>'Cause if you run your mouth and brag about this secret rendezvous</p><p>I will hunt you down</p><p>'Cause they be all up in my business like a Wendy interview</p><p>But this is private, between you and I</p><p>Touch my body, put me on the floor</p><p>Wrestle me around, play with me some more</p><p>Touch my body, throw me on the bed</p><p>I just wanna make you feel like you never did</p><p>Touch my body, let me wrap my thighs</p><p>All around your waist, just a little taste</p><p>Touch my body, know you like my curves</p><p>C'mon and give me what I deserve and touch my body</p><p>Boy you can put me on you like a brand new white tee</p><p>I'll hug your body tighter than my favorite jeans</p><p>I want you to caress me like a tropical breeze</p><p>And float away with you in a Caribbean sea</p><p>If it's a camera up in here</p><p>Then it's gonna leave with me when I do, I do</p><p>If it's a camera up in here</p><p>Then I best not catch this flick on YouTube, YouTube</p><p>'Cause if you run your mouth and brag about this secret rendezvous</p><p>I will hunt you down</p><p>'Cause they be all up in my business like a Wendy interview</p><p>But this is private, between you and I</p><p>Touch my body, put me on the floor</p><p>Wrestle me around, play with me some more</p><p>Touch my body, throw me on the bed</p><p>I just wanna make you feel like you never did</p><p>Touch my body, let me wrap my thighs</p><p>All around your waist, just a little taste</p><p>Touch my body, know you like my curves</p><p>C'mon and give me what I deserve and touch my body</p><p>I'ma treat you like a teddy bear, you won't wanna go nowhere</p><p>In the lap of luxury, laying intertwined with me</p><p>You won't want for nothing boy (no)</p><p>I will give you plenty of joy</p><p>Touch my body, put me on the floor (put me on the floor)</p><p>Wrestle me around, play with me some more</p><p>Touch my body, throw me on the bed</p><p>I just wanna make you feel like you never did</p><p>Touch my body, let me wrap my thighs</p><p>All around your waist, just a little taste</p><p>Touch my body, know you like my curves (I know you like it)</p><p>C'mon and give me what I deserve (Give me what I just said that)</p><p>And touch my body</p><p>Oh yeah oh yeah</p><p>Oh yeah oh yeah</p><p>Yea, yea</p><p>Every little way you like to touch my body, baby</p><p>Yeah, ooh ooh baby</p><p>Ooh, ooh ooh</p><p>(Touch my body)</p><p>C'mon and give me what I deserve</p>",
        imageUrl: 'https://www.mcarchives.com/fotos/fotos11/576.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=9b8erWuBA44'
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
