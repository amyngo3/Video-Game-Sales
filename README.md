# Art 151 - Video Game Sales (2016)

I used video game sales from 2016 on Kaggle.

Original Data Source
https://www.kaggle.com/datasets/rush4ratio/video-game-sales-with-ratings

Guide on how to run main.html
- Can use Google Chrome Extension to run or VSC Live Server
https://github.com/processing/p5.js/wiki/Local-server

P5JS Sketch source
https://p5js.org/

How I extracted Data:
First, I sort the excel sheet (Video_Games_Sales_as_at_22_Dec_2016) by publishers in ascending order and extracted popular or well known games. Since games have multiple platforms, I only choose 2 platforms per game. Data with missing information are not included.
I choose 7 publishers, Activision, Atlus, Bethesda, Capcom, Electronic Arts (EA), Microsoft Game Studios, Nintendo.

Description:
This project works like a Powerpoint slide.
First slide is a brief introduction on what this project is.
Second slide shows a scatterplot with two drop down menus to affect the chart. Users interact with the drop-down menus and select the Year of Release, NA Sales, EU Sales, JP Sales, Other Sales, Global Sales, Critic Score, Critic Count, User Score, and User Count.
Third slide is the data used in the project.

Double click to see the next slide. Users may come back to the first slide after the third slide.

**NOTE:**
There may be a slight delay after changing values from the drop down menu on the second slide. The code continously runs on the current selected option to overlap the visual.
