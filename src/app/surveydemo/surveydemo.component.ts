import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';

@Component({
  selector: 'app-surveydemo',
  templateUrl: './surveydemo.component.html',
  styleUrls: ['./surveydemo.component.css']
})
export class SurveydemoComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;

  ngOnInit() {
    // var json = {
    //   questions: [
    //     {
    //       type: "radiogroup", name: "car", title: "What car are you driving?", isRequired: true,
    //       colCount: 5, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
    //     },
    //     {
    //       type: "radiogroup", name: "car2", title: "What car2 are you driving?", isRequired: true,
    //       colCount: 5, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
    //     },
    //     {
    //       type: "radiogroup", name: "car3", title: "What car3 are you driving?", isRequired: true,
    //       colCount: 5, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
    //     }
    //   ]
    // };
    var json = {
      title: "Organisation Feedback Survey Example", showProgressBar: "top", pages: [
        {
          questions: [
            {
              type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
              columns: [{ value: 1, text: "Strongly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 3, text: "Neutral" },
              { value: 4, text: "Agree" },
              { value: 5, text: "Strongly Agree" }],
              rows: [{ value: "affordable", text: "Product is affordable" },
              { value: "does what it claims", text: "Product does what it claims" },
              { value: "better then others", text: "Product is better than other products on the market" },
              { value: "easy to use", text: "Product is easy to use" }]
            },
            {
              type: "rating", name: "satisfaction", title: "How satisfied are you with the Product?",
              mininumRateDescription: "Not Satisfied", maximumRateDescription: "Completely satisfied"
            },
            {
              type: "rating", name: "recommend friends", visibleIf: "{satisfaction} > 3",
              title: "How likely are you to recommend the Product to a friend or co-worker?",
              mininumRateDescription: "Will not recommend", maximumRateDescription: "I will recommend"
            },
            { type: "comment", name: "suggestions", title: "What would make you more satisfied with the Product?", }
          ]
        },
        {
          questions: [
            {
              type: "radiogroup", name: "price to competitors",
              title: "Compared to our competitors, do you feel the Product is",
              choices: ["Less expensive", "Priced about the same", "More expensive", "Not sure"]
            },
            {
              type: "radiogroup", name: "price", title: "Do you feel our current price is merited by our product?",
              choices: ["correct|Yes, the price is about right",
                "low|No, the price is too low for your product",
                "high|No, the price is too high for your product"]
            },
            {
              type: "multipletext", name: "pricelimit", title: "What is the... ",
              items: [{ name: "mostamount", title: "Most amount you would every pay for a product like ours" },
              { name: "leastamount", title: "The least amount you would feel comfortable paying" }]
            }
          ]
        },
        {
          questions: [
            {
              type: "rating",
              name: "nps_score",
              title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,              
              minRateDescription: "(Most unlikely)",
              maxRateDescription: "(Most likely)"
            }, {
              type: "checkbox",
              name: "promoter_features",
              visibleIf: "{nps_score} >= 9",
              title: "What features do you value the most?",
              isRequired: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please select two features maximum.",
                  maxCount: 2
                }
              ],
              hasOther: true,
              choices: [
                "Performance", "Stability", "User Interface", "Complete Functionality"
              ],
              otherText: "Other feature:",
              colCount: 2
            }, {
              type: "comment",
              name: "passive_experience",
              visibleIf: "{nps_score} > 6  and {nps_score} < 9",
              title: "What is the primary reason for your score?"
            }
          ]
        },
        {
          questions: [
            {
              type: "text", name: "email",
              title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button.",
              isRequired: true,
              validators: [
                  {
                      type: "email"
                  }
              ]
            }
          ]
        }
      ]
    };

    Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
    Survey.Survey.cssType = "bootstrap";

    var model = new Survey.Model(json);
    Survey.SurveyNG.render('surveyContainer', { model: model });

    model.onComplete.add(function (result) {
      document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);
      var resultAsString = JSON.stringify(result.data);
      alert(resultAsString);
    });
  }

}
