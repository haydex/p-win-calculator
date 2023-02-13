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

    document.addEventListener('input', function (event) {

        if ((selectAgencyElement.value) && (selectTeamElement.value) && (inputBidElement.value != "") && (selectModelElement.value)) {
            pScoreElement.innerHTML = "0.641";
        } else {
            pScoreElement.innerHTML = "0.0";
        }


        // Only run on our select menu
        // if (event.target.id !== 'wizard') return;

        // Do stuff...

    }, false);

    resetSelectionButton.addEventListener('click', function (event) {

        selectAgencyElement.selectedIndex = 0;
        selectTeamElement.selectedIndex = 0;
        inputBidElement.value = "";
        selectModelElement.selectedIndex = 0;
        pScoreElement.innerHTML = "0.0";


    }, false);

    quitButton.addEventListener('click', function (event) {

        resetSelectionButton.remove();
        pScoreElement.parentElement.remove();
        sectionSelectionElement.remove();
        this.remove();
        sectionMessageElement.innerHTML = "<span>Thank you,</span>for using P-Win."

    }, false);

    
    

});