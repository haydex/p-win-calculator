document.addEventListener("DOMContentLoaded", function() {

    let sectionSelectionElement = this.querySelector("section#selection")
    let selectAgencyElement = this.querySelector("select#agency");
    let selectTeamElement = this.querySelector("select#team");
    let inputBidElement = this.querySelector("input#bid");
    let selectModelElement = this.querySelector("select#model");
    let pScoreElement = this.querySelector("p#score-value");
    let resetSelectionButton = this.querySelector("button#reset-selection-button");
    let quitButton = this.querySelector("button#quit-button");
    let sectionMessageElement = this.querySelector("section#message p");

    let agenciesList = [   
        {
                "name": "AF",
                "value": 0.122
            },
            {
                "name": "ANG",
                "value": 0
            },
            {
                "name": "ARMY",
                "value": 0.167
            },
            {
                "name": "ARNG",
                "value": 0.4
            },
            {
                "name": "DHA",
                "value": 0.333
            },
            {
                "name": "DHS",
                "value": 0.167
            },
            {
                "name": "DOD",
                "value": 0
            },
            {
                "name": "DOE",
                "value": 0.5
            },
            {
                "name": "DOI",
                "value": 0
            },
            {
                "name": "DOL",
                "value": 1
            },
            {
                "name": "DOS",
                "value": 0.5
            },
            {
                "name": "FAA",
                "value": 0.143
            },
            {
                "name": "JCS",
                "value": 0
            },
            {
                "name": "MC",
                "value": 0
            },
            {
                "name": "Navy",
                "value": 0.222
            },
            {
                "name": "NGB",
                "value": 0
            },
            {
                "name": "TSA",
                "value": 0
            },
            {
                "name": "USAID",
                "value": 0
            },
            {
                "name": "USCBP",
                "value": 0
            },
            {
                "name": "USCG",
                "value": 0
            },
            {
                "name": "USMC",
                "value": 1
            },
            {
                "name": "New  Agency",
                "value": 0.205
            }
    ];

    let teamsList = [
            {
                "team": "22nd Century Technologies",
                "value": 0
            },
            {
                "team": "Abacus Technology, Anser",
                "value": 1
            },
            {
                "team": "Accenture Federal Services (AFS)",
                "value": 0.5
            },
            {
                "team": "Air and Space Operrations (D3ASO)",
                "value": 0
            },
            {
                "team": "Amaze",
                "value": 0
            },
            {
                "team": "Ambit",
                "value": 0
            },
            {
                "team": "Anser",
                "value": 0.125
            },
            {
                "team": "ASI Government, LLC",
                "value": 1
            },
            {
                "team": "Blue Mountain Data Systems (BMDS)",
                "value": 1
            },
            {
                "team": "Booz Allen",
                "value": 0
            },
            {
                "team": "Catapult Technology, Capstone",
                "value": 1
            },
            {
                "team": "Cherokee Nation Technologies",
                "value": 0
            },
            {
                "team": "Constant Associates",
                "value": 0
            },
            {
                "team": "CTC",
                "value": 1
            },
            {
                "team": "Dexis",
                "value": 0
            },
            {
                "team": "Digital Forensics",
                "value": 0
            },
            {
                "team": "EVC",
                "value": 0.1111111111111111
            },
            {
                "team": "Information Analysis Incorporated (IAI)",
                "value": 0
            },
            {
                "team": "ISHPI",
                "value": 0
            },
            {
                "team": "King Rosen & Felming (AKRF)",
                "value": 0
            },
            {
                "team": "MacAulay-Brown, Inc",
                "value": 0
            },
            {
                "team": "MAXIMUS Federal, The Bowen Group",
                "value": 0
            },
            {
                "team": "MEI Technologies",
                "value": 0
            },
            {
                "team": "Navigant Consulting, Inc",
                "value": 0
            },
            {
                "team": "Nolij Consulting",
                "value": 0
            },
            {
                "team": "Planning Technology, Inc. (PTI)",
                "value": 0
            },
            {
                "team": "Pragmatics",
                "value": 0.333
            },
            {
                "team": "Regulus and OAS",
                "value": 0
            },
            {
                "team": "Rigel Corporation",
                "value": 1
            },
            {
                "team": "Robert Kegan, PHD and Carl Savino",
                "value": 1
            },
            {
                "team": "Salient CRGT",
                "value": 1
            },
            {
                "team": "SDA Solutions",
                "value": 0.5
            },
            {
                "team": "Securboration, Inc.",
                "value": 0
            },
            {
                "team": "STI-TEC",
                "value": 0.1875
            },
            {
                "team": "Technical and Project Engineering , LLC (TAPE)",
                "value": 0
            },
            {
                "team": "Teracore",
                "value": 0
            },
            {
                "team": "USRA, Tetra Tech",
                "value": 0
            },
            {
                "team": "Vital Edge Solutions",
                "value": 0
            },
            {
                "team": "Team Not in List",
                "value": 0.1951219512195122
            },
            {
                "team": "Team Not Used",
                "value": 0.304
            }
        ];
    
    let bidsList = [
        {
            "price": 79,
            "value": 1
        },
        {
            "price": 165,
            "value": 1
        },
        {
            "price": 247,
            "value": 0.667
        },
        {
            "price": 299,
            "value": 0.5
        },
        {
            "price": 344,
            "value": 0.6
        },
        {
            "price": 382,
            "value": 0.667
        },
        {
            "price": 520,
            "value": 0.714
        },
        {
            "price": 535,
            "value": 0.625
        },
        {
            "price": 637,
            "value": 0.667
        },
        {
            "price": 652,
            "value": 0.6
        },
        {
            "price": 759,
            "value": 0.545
        },
        {
            "price": 771,
            "value": 0.5
        },
        {
            "price": 827,
            "value": 0.538
        },
        {
            "price": 933,
            "value": 0.5
        },
        {
            "price": "1,003",
            "value": 0.467
        },
        {
            "price": "1,167",
            "value": 0.438
        },
        {
            "price": "1,217",
            "value": 0.412
        },
        {
            "price": "1,297",
            "value": 0.389
        },
        {
            "price": "1,333",
            "value": 0.368
        },
        {
            "price": "1,343",
            "value": 0.35
        },
        {
            "price": "1,366",
            "value": 0.333
        },
        {
            "price": "1,578",
            "value": 0.318
        },
        {
            "price": "1,600",
            "value": 0.304
        },
        {
            "price": "1,684",
            "value": 0.333
        },
        {
            "price": "1,756",
            "value": 0.36
        },
        {
            "price": "1,756",
            "value": 0.346
        },
        {
            "price": "1,829",
            "value": 0.333
        },
        {
            "price": "2,000",
            "value": 0.321
        },
        {
            "price": "2,044",
            "value": 0.345
        },
        {
            "price": "2,117",
            "value": 0.333
        },
        {
            "price": "2,215",
            "value": 0.323
        },
        {
            "price": "2,266",
            "value": 0.313
        },
        {
            "price": "2,266",
            "value": 0.303
        },
        {
            "price": "2,484",
            "value": 0.294
        },
        {
            "price": "2,484",
            "value": 0.286
        },
        {
            "price": "2,504",
            "value": 0.306
        },
        {
            "price": "2,607",
            "value": 0.297
        },
        {
            "price": "2,780",
            "value": 0.289
        },
        {
            "price": "3,032",
            "value": 0.282
        },
        {
            "price": "3,328",
            "value": 0.275
        },
        {
            "price": "3,492",
            "value": 0.268
        },
        {
            "price": "3,719",
            "value": 0.286
        },
        {
            "price": "3,997",
            "value": 0.302
        },
        {
            "price": "4,082",
            "value": 0.295
        },
        {
            "price": "4,128",
            "value": 0.289
        },
        {
            "price": "4,281",
            "value": 0.283
        },
        {
            "price": "4,484",
            "value": 0.277
        },
        {
            "price": "4,802",
            "value": 0.271
        },
        {
            "price": "4,803",
            "value": 0.265
        },
        {
            "price": "5,160",
            "value": 0.26
        },
        {
            "price": "5,160",
            "value": 0.255
        },
        {
            "price": "5,170",
            "value": 0.25
        },
        {
            "price": "5,183",
            "value": 0.245
        },
        {
            "price": "5,585",
            "value": 0.241
        },
        {
            "price": "5,723",
            "value": 0.236
        },
        {
            "price": "5,728",
            "value": 0.232
        },
        {
            "price": "5,766",
            "value": 0.228
        },
        {
            "price": "5,772",
            "value": 0.224
        },
        {
            "price": "5,885",
            "value": 0.237
        },
        {
            "price": "6,114",
            "value": 0.233
        },
        {
            "price": "6,125",
            "value": 0.23
        },
        {
            "price": "6,125",
            "value": 0.226
        },
        {
            "price": "6,331",
            "value": 0.222
        },
        {
            "price": "6,552",
            "value": 0.219
        },
        {
            "price": "6,617",
            "value": 0.215
        },
        {
            "price": "6,742",
            "value": 0.212
        },
        {
            "price": "6,759",
            "value": 0.209
        },
        {
            "price": "6,869",
            "value": 0.206
        },
        {
            "price": "6,964",
            "value": 0.203
        },
        {
            "price": "6,986",
            "value": 0.2
        },
        {
            "price": "7,375",
            "value": 0.197
        },
        {
            "price": "7,587",
            "value": 0.208
        },
        {
            "price": "8,113",
            "value": 0.219
        },
        {
            "price": "8,154",
            "value": 0.216
        },
        {
            "price": "8,229",
            "value": 0.213
        },
        {
            "price": "8,383",
            "value": 0.211
        },
        {
            "price": "8,659",
            "value": 0.208
        },
        {
            "price": "8,715",
            "value": 0.205
        },
        {
            "price": "8,986",
            "value": 0.203
        },
        {
            "price": "10,329",
            "value": 0.2
        },
        {
            "price": "10,644",
            "value": 0.198
        },
        {
            "price": "10,803",
            "value": 0.195
        },
        {
            "price": "11,091",
            "value": 0.193
        },
        {
            "price": "11,649",
            "value": 0.19
        },
        {
            "price": "12,952",
            "value": 0.188
        },
        {
            "price": "13,357",
            "value": 0.186
        },
        {
            "price": "13,644",
            "value": 0.184
        },
        {
            "price": "13,855",
            "value": 0.182
        },
        {
            "price": "14,570",
            "value": 0.191
        },
        {
            "price": "15,212",
            "value": 0.189
        },
        {
            "price": "15,882",
            "value": 0.198
        },
        {
            "price": "17,163",
            "value": 0.207
        },
        {
            "price": "17,710",
            "value": 0.204
        },
        {
            "price": "19,837",
            "value": 0.202
        },
        {
            "price": "29,561",
            "value": 0.2
        },
        {
            "price": "41,167",
            "value": 0.198
        },
        {
            "price": "42,844",
            "value": 0.196
        },
        {
            "price": "43,200",
            "value": 0.194
        },
        {
            "price": "44,684",
            "value": 0.192
        },
        {
            "price": "52,146",
            "value": 0.19
        },
        {
            "price": "64,467",
            "value": 0.188
        },
        {
            "price": "66,582",
            "value": 0.186
        },
        {
            "price": "73,021",
            "value": 0.184
        },
        {
            "price": "76,956",
            "value": 0.183
        },
        {
            "price": "85,000",
            "value": 0.19
        },
        {
            "price": "116,511",
            "value": 0.189
        }
    ];

    let modelsList = [
        {
            name: "Equal Weight",
            value: (agency, team, bid) => ((1/3)*agency + (1/3)*team + (1/3)*bid)
        }
    ];

    agenciesList.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = element["name"];
        option.value = element["value"];
        selectAgencyElement.appendChild(option);
    });

    teamsList.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = element["team"];
        option.value = element["value"];
        selectTeamElement.appendChild(option);
    });

    modelsList.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = element["name"];
        option.value = element["value"];
        selectModelElement.appendChild(option);
    });

    document.addEventListener('submit', event => event.preventDefault(), false);

    document.addEventListener('input', event => {

        if ((selectAgencyElement.value) && (selectTeamElement.value) && (inputBidElement.value != "") && (selectModelElement.value)) {
            let model = eval(selectModelElement.value);
            let bid = +inputBidElement.value.replace(/\,/g, '');
            let i = 0;
            // Convert millions to thousands
            bid /= 1000;
            // Round to the highest thousand
            bid = Math.round(bid);
            // console.log(`Rounded: ${bid * 1000}`);
            let highestBid = typeof bidsList[bidsList.length - 1].price == "string" ? +bidsList[bidsList.length - 1].price.replace(/\,/g, '') : bidsList[bidsList.length - 1].price;
            if (bid < highestBid) {
                // Find nearest higher bid than the entered bid
                for(i=0; i < bidsList.length; i++) {
                    let price = typeof bidsList[i].price == "string" ? +bidsList[i].price.replace(/\,/g, '') : bidsList[i].price;
                    if (price >= bid) break;
                }
            } else {
                i = bidsList.length - 1;
            }
            
            console.log(`Selected Bid:\nPrice: ${(typeof bidsList[i].price == "string" ? +bidsList[i].price.replace(/\,/g, '') : bidsList[i].price) * 1000} Value: ${bidsList[i].value}`);
            pScoreElement.innerHTML = model(selectAgencyElement.value, selectTeamElement.value, bidsList[i].value).toFixed(2);
        } else {
            pScoreElement.innerHTML = "0.0";
        }


        // Only run on our select menu
        // if (event.target.id !== 'wizard') return;

        // Do stuff...

    }, false);

    resetSelectionButton.addEventListener('click', event => {

        selectAgencyElement.selectedIndex = 0;
        selectTeamElement.selectedIndex = 0;
        inputBidElement.value = "";
        selectModelElement.selectedIndex = 0;
        pScoreElement.innerHTML = "0.0";


    }, false);

    quitButton.addEventListener('click', event => {

        resetSelectionButton.remove();
        pScoreElement.parentElement.remove();
        sectionSelectionElement.remove();
        quitButton.remove();
        sectionMessageElement.innerHTML = "<span>Thank you,</span>for using P-Win."

    }, false);

    
    

});