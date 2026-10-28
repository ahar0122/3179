var vg_1 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/2%20Average%20Number%20of%20Standard%20Drinks%20Consumed%20Per%20Week.json";

var vg_2 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/1%20Proportion%20of%20Australians%20who%20drink%20Alcohol%20daily.json";

var vg_3 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/3%20males%20vs%20females%20weekly%20standards.json";

var vg_4 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/4%20world%20map%20of%20alcohol%20consumption.json";

var vg_5 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/5%20alcohol%20beverage%20changes.json";

var vg_6 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/6%20Genders%20by%20Risky%20consumption.json";

var vg_7 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/7%20abstainers%20bin%20map.json";

var vg_8 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/8%20australia%20compared%20to%20key%20nations.json";

var vg_9 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/9%20beer%20consumption%20pie.json";

var vg_10 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/10%20wine%20consumption%20bar.json";

var vg_11 = "https://raw.githubusercontent.com/ahar0122/3179/refs/heads/main/11%20continents%20alcohol%20consumption%20jitter%20boxplot.json";


// First visualisation: average weekly standard drinks
vegaEmbed("#normalised_stacked_bar_chart", vg_1)
    .then(function(result) {
        console.log("Weekly consumption visualisation loaded");
    })

// Second visualisation: daily alcohol consumption
vegaEmbed("#daily_chart", vg_2)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })

vegaEmbed("#gender_butterfly", vg_3)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })

vegaEmbed("#world_map_consumption", vg_4)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })

vegaEmbed("#beverage_changes", vg_5)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })

vegaEmbed("#gender", vg_6)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })
    
vegaEmbed("#abstainers_bin", vg_7)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })
    
vegaEmbed("#lollipop", vg_8)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })
    
vegaEmbed("#pie", vg_9)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })
    
vegaEmbed("#bar", vg_10)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })
    
vegaEmbed("#jitter", vg_11)
    .then(function(result) {
        console.log("Daily consumption visualisation loaded");
    })    