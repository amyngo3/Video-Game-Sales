// data from https://www.kaggle.com/rush4ratio/video-game-sales-with-ratings
let w = 1950;
let h = 2915;
let xItem, yItem;
let currentSlide = 0;
let slides;
let table;  // Global object to hold results from the loadTable call

// image variables
let activisionImg, atlusImg, bethesdaImg, capcomImg, eaImg, microsoftImg, nintendoImg;

let data = {};   // Global object to hold results from the loadJSON call
let games = [];   // global array to hold all data Y objects

// reference: https://p5js.org/examples/advanced-data-load-saved-json.html
class Game{
    constructor(name, platform, year, genre, publisher,
                na, eu, jp, other, global, cScore, cCount,
                uScore, uCount, dev, rating)
    {
        this.theName = name;
        this.platform = platform;
        this.year = year;
        this.genre = genre;
        this.publisher = publisher;
        this.na = na;
        this.eu = eu;
        this.jp = jp;
        this.other = other;
        this.global = global;
        this.cScore = cScore;
        this.cCount = cCount;
        this.uScore = uScore;
        this.uCount = uCount;
        this.dev = dev;
        this.rating = rating;
        this.radius = 5;    // each circle is 10 in width and height

        this.hover = false;     // mouse hover
    }

    // check if mouse hover on circle
    hoverOver(mx, my, xItem, yItem){
        let d, a, b;
        // get this specific circle's coordinate
        if(xItem == 'Year of Release')
            a = this.year;
        else if(xItem == 'NA Sales')
            a = this.na;
        else if(xItem == 'EU Sales')
            a = this.eu;
        else if(xItem == 'JP Sales')
            a = this.jp;
        else if(xItem == 'Other Sales')
            a = this.other;
        else if(xItem == 'Global Sales')
            a = this.global;
        else if(xItem == 'Critic Score')
            a = this.cScore;
        else if(xItem == 'Critic Count')
            a = this.cCount;
        else if(xItem == 'User Score')
            a = this.uScore;
        else if(xItem == 'User Count')
            a = this.uCount;
        // ====================================
        if(yItem == 'Year of Release')
            b = this.year;
        else if(yItem == 'NA Sales')
            b = this.na;
        else if(yItem == 'EU Sales')
            b = this.eu;
        else if(yItem == 'JP Sales')
            b = this.jp;
        else if(yItem == 'Other Sales')
            b = this.other;
        else if(yItem == 'Global Sales')
            b = this.global;
        else if(yItem == 'Critic Score')
            b = this.cScore;
        else if(yItem == 'Critic Count')
            b = this.cCount;
        else if(yItem == 'User Score')
            b = this.uScore;
        else if(yItem == 'User Count')
            b = this.uCount;
        
        d = dist(mx, my, a, b); // distance between mouse and circle
        this.hover = d < this.radius;   // mouse on circle is true if mouse hovers
        // console.log(this.hover);
    }

    // show circles on chart
    // left vertical line minimum 200
    // bottom horizontal line minimum 1050
    display(){
        // console.log("display function called");
        stroke(0);
        strokeWeight(0.8);
        noFill();
        for(var i = 0; i < games.length; i++){
            // console.log("make circle on chart");
            var xVal;
            var yVal;

            // get array's data
            if(xItem == 'Year of Release'){
                xVal = games[i].year;
            }
            else if(xItem == 'NA Sales'){
                xVal = games[i].na;
            }
            else if(xItem == 'EU Sales'){
                xVal = games[i].eu;
            } 
            else if(xItem == 'JP Sales'){
                xVal = games[i].jp;
            }
            else if(xItem == 'Other Sales'){
                xVal = games[i].other;
            }
            else if(xItem == 'Global Sales'){
                xVal = games[i].global;
            }
            else if(xItem == 'Critic Score'){
                xVal = games[i].cScore;
            }
            else if(xItem == 'Critic Count'){
                xVal = games[i].cCount;
            }
            else if(xItem == 'User Score'){
                xVal = games[i].uScore;
            }
            else if(xItem == 'User Count'){
                xVal = games[i].uCount;
            }
            // ====================================
            if(yItem == 'Year of Release'){
                yVal = games[i].year;
            }
            else if(yItem == 'NA Sales'){
                yVal = games[i].na;
            }
            else if(yItem == 'EU Sales'){
                yVal = games[i].eu;
            } 
            else if(yItem == 'JP Sales'){
                yVal = games[i].jp;
            }
            else if(yItem == 'Other Sales'){
                yVal = games[i].other;
            }
            else if(yItem == 'Global Sales'){
                yVal = games[i].global;
            }
            else if(yItem == 'Critic Score'){
                yVal = games[i].cScore;
            }
            else if(yItem == 'Critic Count'){
                yVal = games[i].cCount;
            }
            else if(yItem == 'User Score'){
                yVal = games[i].uScore;
            }
            else if(yItem == 'User Count'){
                yVal = games[i].uCount;
            }
            // ===========================================
            // premade value of years - less stress
            // manually set x value
            if(xItem == 'Year of Release'){
                if(xVal == 1996)
                    xVal = 1;
                else if (xVal == 2000)
                    xVal = 5;
                else if (xVal == 2001)
                    xVal = 6;
                else if (xVal == 2002)
                    xVal = 7;
                else if (xVal == 2003)
                    xVal = 8;
                else if (xVal == 2004)
                    xVal = 9;
                else if (xVal == 2005)
                    xVal = 10;
                else if (xVal == 2006)
                    xVal = 11;
                else if (xVal == 2007)
                    xVal = 12;
                else if (xVal == 2008)
                    xVal = 13;
                else if (xVal == 2009)
                    xVal = 14;
                else if (xVal == 2010)
                    xVal = 15;
                else if (xVal == 2011)
                    xVal = 16;
                else if (xVal == 2012)
                    xVal = 17;
                else if (xVal == 2013)
                    xVal = 18;
                else if (xVal == 2014)
                    xVal = 19;
                else if (xVal == 2015)
                    xVal = 20;
                else if (xVal == 2016)
                    xVal = 21;
            }

            // manually set y value
            if(yItem == 'Year of Release'){
                if(yVal == 1996)
                    yVal = 1;
                else if (yVal == 2000)
                    yVal = 5;
                else if (yVal == 2001)
                    yVal = 6;
                else if (yVal == 2002)
                    yVal = 7;
                else if (yVal == 2003)
                    yVal = 8;
                else if (yVal == 2004)
                    yVal = 9;
                else if (yVal == 2005)
                    yVal = 10;
                else if (yVal == 2006)
                    yVal = 11;
                else if (yVal == 2007)
                    yVal = 12;
                else if (yVal == 2008)
                    yVal = 13;
                else if (yVal == 2009)
                    yVal = 14;
                else if (yVal == 2010)
                    yVal = 15;
                else if (yVal == 2011)
                    yVal = 16;
                else if (yVal == 2012)
                    yVal = 17;
                else if (yVal == 2013)
                    yVal = 18;
                else if (yVal == 2014)
                    yVal = 19;
                else if (yVal == 2015)
                    yVal = 20;
                else if (yVal == 2016)
                    yVal = 21;
            }

            // give circle a color based on Publisher
            if(games[i].publisher == 'Atlus')
                fill('red');
            else if(games[i].publisher == 'Activision')
                fill('orange');
            else if(games[i].publisher == 'Bethesda')
                fill('yellow');
            else if(games[i].publisher == 'Capcom')
                fill('green');
            else if(games[i].publisher == 'Electronic Arts')
                fill('blue');
            else if(games[i].publisher == 'Microsoft Game Studios')
                fill('purple');
            else if(games[i].publisher == 'Nintendo')
                fill('pink');
            // ===========================================
            // draw circles
            if(xItem == 'Year of Release'){
                if(yItem == 'Year of Release')
                {
                    // draw circle
                    ellipse(100 + (xVal*25), 1050 - (yVal*25), 10, 10);
                } 
                // x - year, y - na, eu, jp, other sales
                else if(yItem == 'NA Sales' || yItem == 'EU Sales' || 
                        yItem == 'JP Sales' || yItem == 'Other Sales')
                    ellipse(100 + (xVal*25), 1050 - (yVal*100), 10, 10);
                // global sales
                else if (yItem == 'Global Sales')
                    ellipse(100 + (xVal*25), 1050 - (yVal*35), 10, 10);
                // critic count
                else if(yItem == 'Critic Score' || yItem == 'Critic Count')
                    ellipse(100 + (xVal*25), 1050 - ((yVal/10)*50), 10, 10);
                // user score
                else if (yItem == 'User Score')
                    ellipse(100 + (xVal*25), 1050 - (yVal*50), 10, 10);
                // user count
                else if(yItem == 'User Count')
                    ellipse(100 + (xVal*25), 1050 - (yVal/11), 10, 10);
            }
            // NA, EU, JP and Other Sales
            else if(xItem == 'NA Sales' || xItem == 'EU Sales' || 
               xItem == 'JP Sales' || xItem == 'Other Sales')
            {
                if(yItem == 'Year of Release')
                    ellipse(100 + (xVal*100), 1050 - (yVal*25), 10, 10);
                else if(yItem == 'NA Sales' || yItem == 'EU Sales' || 
                        yItem == 'JP Sales' || yItem == 'Other Sales')
                    ellipse(100 + (xVal*100), 1050 - (yVal*100), 10, 10);
                else if(yItem == 'Global Sales')
                    ellipse(100 + (xVal*100), 1050 - (yVal*35), 10, 10);
                else if(yItem == 'Critic Score' || yItem == 'Critic Count')
                    ellipse(100 + (xVal*100), 1050 - ((yVal/10)*50), 10, 10);
                else if(yItem == 'User Score')
                    ellipse(100 + (xVal*100), 1050 - (yVal*50), 10, 10);
                else if(yItem == 'User Count')
                    ellipse(100 + (xVal*100), 1050 - (yVal/11), 10, 10);
            }
            else if(xItem == 'Global Sales'){
                if(yItem == 'Year of Release')
                    ellipse(100 + (xVal*35), 1050 - (yVal*25), 10, 10);
                else if(yItem == 'NA Sales' || yItem == 'EU Sales' || 
                        yItem == 'JP Sales' || yItem == 'Other Sales')
                    ellipse(100 + (xVal*35), 1050 - (yVal*100), 10, 10);
                else if(yItem == 'Global Sales')
                    ellipse(100 + (xVal*35), 1050 - (yVal*35), 10, 10);
                else if(yItem == 'Critic Score' || yItem == 'Critic Count')
                    ellipse(100 + (xVal*35), 1050 - ((yVal/10)*50), 10, 10);
                else if(yItem == 'User Score')
                    ellipse(100 + (xVal*35), 1050 - (yVal*50), 10, 10);
                else if(yItem == 'User Count')
                    ellipse(100 + (xVal*35), 1050 - (yVal/11), 10, 10);
            }
            else if(xItem == 'Critic Score' || xItem == 'Critic Count'){
                if(yItem == 'Year of Release')
                    ellipse(100 + ((xVal/10)*50), 1050 - (yVal*25), 10, 10);
                else if(yItem == 'NA Sales' || yItem == 'EU Sales' || 
                   yItem == 'JP Sales' || yItem == 'Other Sales')
                    ellipse(100 + ((xVal/10)*50), 1050 - (yVal*100), 10, 10);
                else if(yItem == 'Global Sales')
                    ellipse(100 + ((xVal/10)*50), 1050 - (yVal*35), 10, 10);
                else if(yItem == 'Critic Score' || yItem == 'Critic Count')
                    ellipse(100 + ((xVal/10)*50), 1050 - ((yVal/10)*50), 10, 10);
                else if(yItem == 'User Score')
                    ellipse(100 + ((xVal/10)*50), 1050 - (yVal*50), 10, 10);
                else if(yItem == 'User Count')
                    ellipse(100 + ((xVal/10)*50), 1050 - (yVal/11), 10, 10);
            }
            else if(xItem == 'User Score'){
                if(yItem == 'Year of Release')
                    ellipse(100 + (xVal*50), 1050 - (yVal*25), 10, 10);
                else if(yItem == 'NA Sales' || yItem == 'EU Sales' || 
                   yItem == 'JP Sales' || yItem == 'Other Sales')
                    ellipse(100 + (xVal*50), 1050 - (yVal*100), 10, 10);
                else if(yItem == 'Global Sales')
                    ellipse(100 + (xVal*50), 1050 - (yVal*35), 10, 10);
                else if(yItem == 'Critic Score' || yItem == 'Critic Count')
                    ellipse(100 + (xVal*50), 1050 - ((yVal/10)*50), 10, 10);
                else if(yItem == 'User Score')
                    ellipse(100 + (xVal*50), 1050 - (yVal*50), 10, 10);
                else if(yItem == 'User Count')
                    ellipse(100 + (xVal*50), 1050 - (yVal/11), 10, 10);
            }
            else if(xItem == 'User Count'){
                if(yItem == 'Year of Release')
                    ellipse(100 + (xVal/11), 1050 - (yVal*25), 10, 10);
                else if(yItem == 'NA Sales' || yItem == 'EU Sales' || 
                   yItem == 'JP Sales' || yItem == 'Other Sales')
                    ellipse(100 + (xVal/11), 1050 - (yVal*100), 10, 10);
                else if(yItem == 'Global Sales')
                    ellipse(100 + (xVal/11), 1050 - (yVal*35), 10, 10);
                else if(yItem == 'Critic Score' || yItem == 'Critic Count')
                    ellipse(100 + (xVal/11), 1050 - ((yVal/10)*50), 10, 10);
                else if(yItem == 'User Score')
                    ellipse(100 + (xVal/11), 1050 - (yVal*50), 10, 10);
                else if(yItem == 'User Count')
                    ellipse(100 + (xVal/11), 1050 - (yVal/11), 10, 10);
            }
        }
        // show informataion when mouse is on the circle
        if(this.hover){
            fill(0);    // show that the user is hovering this circle
            textSize(14);
            textAlign(CENTER);
            // show data on right side of screen
            text(this.name, width - 650, 360);
            text(this.platform, width - 650, 380);
            text(this.year, width - 650, 400);
            text(this.genre, width - 650, 420);
            text(this.publisher, width - 650, 440);
            text(this.na, width - 650, 460);
            text(this.eu, width - 650, 480);
            text(this.jp, width - 650, 500);
            text(this.other, width - 650, 520);
            text(this.global, width - 650, 540);
            text(this.cScore, width - 650, 560);
            text(this.cCount, width - 650, 580);
            text(this.uScore, width - 650, 600);
            text(this.uCount, width - 650, 620);
        }
    }
}

// preload table
function preload(){
    data = loadJSON("csvjson.json", "header");  // load csv file
    // load images
    activisionImg = loadImage('activision.png');
    atlusImg = loadImage('atlus.png');
    bethesdaImg = loadImage('bethesda.png');
    capcomImg = loadImage('capcom.png');
    eaImg = loadImage('EA.png');
    microsoftImg = loadImage('microsoft.png');
    nintendoImg = loadImage('nintendo.png');
}

// convert saved data in array
function loadData(){
    let gameData = data['games'];
    for(var i = 0; i < gameData.length; i++){
        // console.log("getting data!");
        let gameInfo = gameData[i];
        // get data from loaded json
        let n = gameInfo['Name'];
        let pl = gameInfo['Platform'];
        let y = gameInfo['Year_of_Release'];
        let g = gameInfo['Genre'];
        let pb = gameInfo['Publisher'];
        let naS = gameInfo['NA_Sales'];
        let euS = gameInfo['EU_Sales'];
        let jpS = gameInfo['JP_Sales'];
        let oS = gameInfo['Other_Sales'];
        let gS = gameInfo['Global_Sales'];
        let cS = gameInfo['Critic_Score'];
        let cC = gameInfo['Critic_Count'];
        let uS = gameInfo['User_Score'];
        let uC = gameInfo['User_Count'];
        let d = gameInfo['Developer'];
        let rate = gameInfo['Rating'];

        // push all row data into seperate arrays
        games.push(new Game(n, pl, y, g, pb, naS, euS,
                            jpS, oS, gS, cS, cC, uS, uC, d, rate));
    }
}

function setup(){
    createCanvas(w, h);
    slides = [slide1, slide2, slide3];
    loadData();

    // create drop down menus and button
    xSelect = createSelect();
    ySelect = createSelect();

    // link to original table data
    var a = createA('https://www.kaggle.com/rush4ratio/video-game-sales-with-ratings', 
                    'Original Data Source');
    a.position(150, 30);

    // drop down menu and button positions
    // height is at least 20
    // text size is approximately 14
    // xSelect.position(width - 180, 100);
    // ySelect.position(width - 180, 140);

    // drop down menu list for user to select
    xSelect.option('Select');
    xSelect.option('Year of Release');
    xSelect.option('NA Sales');
    xSelect.option('EU Sales');
    xSelect.option('JP Sales');
    xSelect.option('Other Sales');
    xSelect.option('Global Sales');
    xSelect.option('Critic Score');
    xSelect.option('Critic Count');
    xSelect.option('User Score');
    xSelect.option('User Count');

    ySelect.option('Select');
    ySelect.option('Year of Release');
    ySelect.option('NA Sales');
    ySelect.option('EU Sales');
    ySelect.option('JP Sales');
    ySelect.option('Other Sales');
    ySelect.option('Global Sales');
    ySelect.option('Critic Score');
    ySelect.option('Critic Count');
    ySelect.option('User Score');
    ySelect.option('User Count');

    xSelect.selected('Select');   // default selection upon start up
    ySelect.selected('Select');   // default selection upon start up
    
    // affect the site using the function as parameter
    xSelect.changed(formatGraph);
    ySelect.changed(formatGraph);
}

function draw(){
    slides[currentSlide]();
    // console.log("draw function called");
}

// mouse double click
// avoid issue with single click on drop down menus
function doubleClicked(){
    clear();
    if(currentSlide < slides.length-1){
        currentSlide++;     // next slide
    } else {
        currentSlide = 0;   // set to 0
    }
}

// introduction of the project
function slide1(){
    // console.log("slide1 called");
    background('#F0B696');

    // re-adjust dropdown menus
    xSelect.position(width - 660, 100);
    ySelect.position(width - 660, 140);

    // set title to top of site
    textSize(32);
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    noStroke();
    text('Video Games Sales', w/2, 50);

    textSize(14);
    // axis labels
    noStroke();
    textAlign(LEFT);
    text('Does not affect this slide', width - 665, 80);
    text('Does not affect this slide', width - 665, 125);
    
    // description
    textSize(16);
    fill(0, 0, 0);
    textAlign(LEFT, BASELINE);
    text('Total rows in the data is 16720.', 100, 180);
    text('Some data were missing, thus removed from the data sample.', 100, 200);
    text('The data is cut down to 7 publishers, 20 games per publisher, and at most 2 platforms.', 100, 240);
    text('Publishers I took are:', 100, 260);
    text('1. Activision', 100, 280);
    text('2. Atlus', 100, 300);
    text('3. Bethesda', 100, 320);
    text('4. Capcom', 100, 340);
    text('5. Electronic Arts', 100, 360);
    text('6. Microsoft Game Studios', 100, 380);
    text('7. Nintendo', 100, 400);

    text('Double click to go to the next slide.', 100, 440);

    // show publisher images
    image(activisionImg, 100, 500);
    image(atlusImg, 450, 500);
    image(bethesdaImg, 850, 500);
    image(capcomImg, 1100, 500);
    image(eaImg, 100, 650, 200, 200);
    image(microsoftImg, 300, 450);
    image(nintendoImg, 1100, 550);
}

// scatter plot
function slide2(){
    // console.log("slide2 called");
    background('#9ECFF7');

    // re-adjust dropdown menus
    xSelect.position(width - 660, 100);
    ySelect.position(width - 660, 140);

    // set title to top of site
    textSize(32);
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    noStroke();
    text('Video Games Scatter Plot', w/2, 50);

    textSize(14);
    // axis labels
    noStroke();
    textAlign(LEFT);
    text('X-Axis', width - 665, 80);
    text('Y-Axis', width - 665, 125);

    // abbreviations
    text('NA - North America', width - 660, 480);
    text('EU - Europe', width - 660, 500);
    text('JP - Japan', width - 660, 520);
    text('Other - Not NA, EU or JP', width - 660, 540);

    // legend of colored circle and name of publisher
    stroke(1.5);
    textSize(18);
    fill('black');
    text('Legend', width - 630, 290);

    textSize(14);
    noStroke();
    fill('red');
    ellipse(width - 650, 320, 10, 10);
    fill('black');
    text("Activision", width - 630, 320);
    
    fill('orange');
    ellipse(width - 650, 340, 10, 10);
    fill('black');
    text("Atlus", width - 630, 340);
    
    fill('yellow');
    ellipse(width - 650, 360, 10, 10);
    fill('black');
    text("Bethesda", width - 630, 360);
    
    fill('green');
    ellipse(width - 650, 380, 10, 10);
    fill('black');
    text("Capcom", width - 630, 380);
    
    fill('blue');
    ellipse(width - 650, 400, 10, 10);
    fill('black');
    text("Electronic Arts", width - 630, 400);
    
    fill('purple');
    ellipse(width - 650, 420, 10, 10);
    fill('black');
    text("Microsoft Game Studios", width - 630, 420);
    
    fill('pink');
    ellipse(width - 650, 440, 10, 10);
    fill('black');
    text("Nintendo", width - 630, 440);

    // draw graph outline
    for(var i = 100; i < 1100; i = i + 50){
        // text(i, i, 10);
        stroke(0, 0, 0);        // stroke on lines
        line(i, 100, i, 1050);  // vertical lines
        line(100, i, 1050, i);  // horizontal lines
    }

    // user selected item from drop down menu
    formatGraph();
}

// show table of information
function slide3(){
    // console.log("slide3 called");
    background('#C5DCFC');

    // re-adjust drop down menus
    xSelect.position(width - 180, 100);
    ySelect.position(width - 180, 140);

    // set title to top of site
    textSize(32);
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    noStroke();
    text('Video Games Table', w/2, 50);

    textSize(14);
    // axis labels
    noStroke();
    textAlign(LEFT);
    text('No Affect to Table', width - 185, 80);
    text('No Affect to Table', width - 185, 125);

    textSize(14);
    stroke(1.5);
    text("Name", 20, 100);
    text("Platform", 515, 100);
    text("Year", 585, 100);
    text("Genre", 630, 100);
    text("Publisher", 720, 100);
    text("NA Sales", 880, 100);
    text("EU Sales", 950, 100);
    text("JP Sales", 1020, 100);
    text("Global Sales", 1090, 100);
    text("Critic Score", 1180, 100);
    text("Critic Count", 1260, 100);
    text("User Score", 1345, 100);
    text("User Count", 1425, 100);
    text("Developer", 1505, 100);
    text("Rating", 1710, 100);

    // line below the columns
    stroke(1);
    // horizontal lines
    line(15, 110, 1750, 110);
    
    // vertical lines
    line(510, 80, 510, 2910);
    line(580, 80, 580, 2910);
    line(625, 80, 625, 2910);
    line(715, 80, 715, 2910);
    line(875, 80, 875, 2910);
    line(945, 80, 945, 2910);
    line(1015, 80, 1015, 2910);
    line(1085, 80, 1085, 2910);
    line(1175, 80, 1175, 2910);
    line(1255, 80, 1255, 2910);
    line(1340, 80, 1340, 2910);
    line(1420, 80, 1420, 2910);
    line(1500, 80, 1500, 2910);
    line(1705, 80, 1705, 2910);

    // show list from first drop down menu
    formatTable();
}

// label x and y axis
function formatGraph() {
    // get value
    xItem = xSelect.value();
    yItem = ySelect.value();

    // console.log("REdraw function called");
    redraw();   // redraw
    noStroke();
    // text('It is a ' + xItem + '!', 50, 50);
    // text('It is a ' + yItem + '!', 100, 100);

    // max and min variables
    // highest 2016
    // NA Sales - highest 7.97
    // EU Sales - highest 9.09
    // JP Sales - highest 5.33
    // Other Sales - highest 3.96
    // Global Sales - highest 21.04
    // Critic Score - highest 97
    // Critic Count - highest 101
    // User Score - highest 9.3
    // User Count - highest 9629

    // show affect on canvas
    // x-axis number text
    fill(0, 0, 0);
    if(xItem == 'Year of Release'){
        for(var i = 0; i < 20; i++){
            // x-axis number text
            textAlign(CENTER);
            text(1995 + i*2, i*50 + 100, 75);     // top text
            text(1995 + i*2, i*50 + 100, 1075);   // bottom text
        }
    }
    else if(xItem == 'NA Sales' || xItem == 'EU Sales' 
                                || xItem == 'JP Sales'
                                || xItem == 'Other Sales'){
        for(var i = 0; i < 20; i++){
            // x-axis number text
            textAlign(RIGHT, CENTER);
            text((i*5)/10, i*50 + 100, 75);      // top text
            textAlign(LEFT, CENTER);
            text((i*5)/10, i*50 + 100, 1075);    // bottom text
        }
    }
    else if(xItem == 'Global Sales'){
        for(var i = 0; i < 20; i++){
            // x-axis number text
            textAlign(RIGHT, CENTER);
            text((i*15)/10, i*50 + 100, 75);
            textAlign(LEFT, CENTER);
            text((i*15)/10, i*50 + 100, 1075);
        }
    }
    else if(xItem == 'Critic Score'){
        for(var i = 0; i < 20; i++){
            // x-axis number text
            textAlign(RIGHT, CENTER);
            text(i*10, i*50 + 100, 75);
            textAlign(LEFT, CENTER);
            text(i*10, i*50 + 100, 1075);
        }
    }
    else if(xItem == 'Critic Count'){
        for(var i = 0; i < 20; i++){
            // x-axis number text
            textAlign(RIGHT, CENTER);
            text(i*10, i*50 + 100, 75);
            textAlign(LEFT, CENTER);
            text(i*10, i*50 + 100, 1075);
        }
    }
    else if(xItem == 'User Score'){
        for(var i = 0; i < 20; i++){
            // x-axis number text
            textAlign(RIGHT, CENTER);
            text(i, i*50 + 100, 75);
            textAlign(LEFT, CENTER);
            text(i, i*50 + 100, 1075);
        }
    }
    else if(xItem == 'User Count'){
        for(var i = 0; i < 20; i++){
            // x-axis number text
            textAlign(CENTER, CENTER);
            text(i*550, i*50 + 100, 75);
            textAlign(CENTER, CENTER);
            text(i*550, i*50 + 100, 1075);
        }
    }
    // ===========================================
    if(yItem == 'Year of Release'){
        for(var i = 0; i < 20; i++){
            fill(0, 0, 0);
            // y-axis number text
            textAlign(LEFT, CENTER);
            text(2033 - i*2, 50, i*50 + 100);
            text(2033 - i*2, 1075, i*50 + 100);
        }
    }
    else if(yItem == 'NA Sales' || yItem == 'EU Sales' 
                                || yItem == 'JP Sales'
                                || yItem == 'Other Sales'){
        for(var i = 0; i < 20; i++){
            // y-axis number text
            textAlign(RIGHT, CENTER);
            text((i*5)/10, 75, 1050 - i*50);
            textAlign(LEFT, CENTER);
            text((i*5)/10, 1075, 1050 - i*50);
        }
    }
    else if(yItem == 'Global Sales'){
        for(var i = 0; i < 20; i++){
            // y-axis number text
            textAlign(RIGHT, CENTER);
            text((i*15)/10, 75, 1050 - i*50);
            textAlign(LEFT, CENTER);
            text((i*15)/10, 1075, 1050 - i*50);
        }
    }
    else if(yItem == 'Critic Score'){
        for(var i = 0; i < 20; i++){
            // y-axis number text
            textAlign(RIGHT, CENTER);
            text(i*10, 75, 1050 - i*50);
            textAlign(LEFT, CENTER);
            text(i*10, 1075, 1050 - i*50);
        }
    }
    else if(yItem == 'Critic Count'){
        for(var i = 0; i < 20; i++){
            // y-axis number text
            textAlign(RIGHT, CENTER);
            text(i*10, 75, 1050 - i*50);
            textAlign(LEFT, CENTER);
            text(i*10, 1075, 1050 - i*50);
        }
    }
    else if(yItem == 'User Score'){
        for(var i = 0; i < 20; i++){
            // y-axis number text
            textAlign(RIGHT, CENTER);
            text(i, 75, 1050 - i*50);
            textAlign(LEFT, CENTER);
            text(i, 1075, 1050 - i*50);
        }
    }
    else if(yItem == 'User Count'){
        for(var i = 0; i < 20; i++){
            // y-axis number text
            textAlign(RIGHT, CENTER);
            text(i*550, 75, 1050 - i*50);
            textAlign(LEFT, CENTER);
            text(i*550, 1075, 1050 - i*50);
        }
    }

    getData();
}

function formatTable(){
    // only get data from first drop down menu
    // xItem = xSelect.value();

    for(var i = 0; i < games.length; i++){
        // user selection
        // if(xItem == 'Select'){      // sorted by publisher ascending order
            noStroke();
            text(games[i].theName, 20, 120 + 20*i);
            if(i > 0)   // show horizontal lines
                stroke(1);
                line(15, 110 + (20*i), 1750, 110 + (20*i));   // horizontal line
            noStroke();
            text(games[i].platform, 515, 120 + 20 * i);
            text(games[i].year, 585, 120 + 20 * i);
            text(games[i].genre, 630, 120 + 20 * i);
            text(games[i].publisher, 720, 120 + 20 * i);
            text(games[i].na, 880, 120 + 20 * i);
            text(games[i].eu, 950, 120 + 20 * i);
            text(games[i].jp, 1020, 120 + 20 * i);
            text(games[i].global, 1090, 120 + 20 * i);
            text(games[i].cScore, 1180, 120 + 20 * i);
            text(games[i].cCount, 1260, 120 + 20 * i);
            text(games[i].uScore, 1345, 120 + 20 * i);
            text(games[i].uCount, 1425, 120 + 20 * i);
            text(games[i].dev, 1505, 120 + 20 * i);
            text(games[i].rating, 1710, 120 + 20 * i);
        }
    // }
}

// filter data based on x and y input
function getData(){
    // console.log("Button pressed");
    // get value
    xItem = xSelect.value();
    yItem = ySelect.value();

    if(xItem != 'Select' && yItem != 'Select'){
        // filder data based on given x and y
        for(var i = 0; i < games.length; i++){
            // console.log("getData for loop called");
            games[i].display();
            games[i].hoverOver(mouseX, mouseY, xItem, yItem);
        }
    }
}