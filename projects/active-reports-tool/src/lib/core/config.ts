export const license = "856515978924416#B1KZOQop6SlNmc9YDW8gGdMdTWCFnQvBlSQp5TwJkcwsyVS56NMpGTwYHVBNTd6N5NxFmZrUEewJUMz2kQOREOxMlMENlb4kmV5MjTRd4dF3mdyEzUVdjcMllSrUXMGRGWtRTdzU6dTRXV8MWN7hlajREUzcXYSd4Q8EkcwNVeURmZPlEMZZEav4WQzYUO0FkQzNGWpdVNnxUYysCaSJDOKNTerdHS95WN8lnbON6NLplZoJTaMpVcZpHSwcjcuVGZzw6aGhTSohFWy8UVrhVbqlVVWtEdXJXcWFkWFx4T8dEd4lza09UT6kVexlWU6tWV63mYO56dSBnU8tiQZl7LsJlNz5Gd9hmVQRFSyUFZC36dwMkI0IyUiwiIwEkQygTNFFjI0ICSiwiNzcTOzMTO6gTM0IicfJye#4Xfd5nIWx4SOJiOiMkIsISNWByUKRncvBXZSVmdpR7YBJiOi8kI1tlOiQmcQJCLiMDN4ETOwACMzQDM4IDMyIiOiQncDJCLiMXduMXdpN6cl5mLqwCcvRnLzVXajNXZt9iKs2WauMXdpN6cl5mLqwSbvNmLzVXajNXZt9iKsI7au26YuMXdpN6cl5mLqwCcq9ybj9yc5l6YzVWbuoiI0IyctRkIsIycrJXYQBCbl3mSiojIh94QiwiI6EDN4ITO8cTO5ETN6UDOiojIklkIs4XXbpjInxmZiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34TUVpUN9RkeMJWUsF4dBZDUBZHSyNDZ5wkTR9WWQJmYwxkNIJ4RNlnNpdTZIFWbkNWVLBjWypXOnV7SOVlNQNWSuRuN";
export const CPLReport = {
    "Name": "Report",
    "Body": {
        "ReportItems": [
            {
                "Type": "textbox",
                "Name": "TextBox1",
                "Value": "Hello, Create a New Report",
                "Style": {
                    "FontSize": "18pt"
                },
                "Width": "8.5in",
                "Height": "0.5in"
            }
        ]
    }
};
export const exportsSettings = {
    pdf: {
        title: "ActiveReportsJS Sample",
        author: "MESCIUS",
        subject: "Web Reporting",
        keywords: "reporting, sample",
        userPassword: "",
        ownerPassword: "ownerPwd",
        printing: "none",
        copying: false,
        modifying: false,
        annotating: false,
        contentAccessibility: false,
        documentAssembly: false,
        pdfVersion: "1.7",
        autoPrint: true,
        filename: "ActiveReportsJS-Sample.pdf",
    },
};
export const reportData = {

    customerDetails: [
        { "date": "07/02/2023", "slNo": 1, "customerCode": "123456", "customerName": "John", "address": "New York", "status": "VERIFIED" },
        { "date": "07/02/2023", "slNo": 2, "customerCode": "789101", "customerName": "Mary", "address": "Los Angeles", "status": "VERIFIED" },
        { "date": "04/03/2023", "slNo": 1, "customerCode": "112233", "customerName": "Philip", "address": "Berlin", "status": "VERIFIED" },
        { "date": "14/03/2023", "slNo": 1, "customerCode": "445566", "customerName": "Mary", "address": "Paris", "status": "VERIFIED" },
        { "date": "27/03/2023", "slNo": 1, "customerCode": "778899", "customerName": "Elena", "address": "Manchester", "status": "NOT VERIFIED" },
        { "date": "12/04/2023", "slNo": 1, "customerCode": "123123", "customerName": "Anna", "address": "London", "status": "NOT VERIFIED" },
        { "date": "12/04/2023", "slNo": 1, "customerCode": "456456", "customerName": "Ford", "address": "Las Vegas", "status": "NOT VERIFIED" },
        { "date": "12/04/2023", "slNo": 1, "customerCode": "789789", "customerName": "Jane", "address": "Boston", "status": "VERIFIED" }
    ]
}

export const drillDown = 
{
    
        "Name": "Report1111111111111111",
        "Width": "0in",
        "Layers": [
            {
                "Name": "default"
            }
        ],
        "CustomProperties": [
            {
                "Name": "DisplayType",
                "Value": "Page"
            },
            {
                "Name": "SizeType",
                "Value": "Default"
            },
            {
                "Name": "PaperOrientation",
                "Value": "Portrait"
            },
            {
                "Name": "CollapseWhiteSpace",
                "Value": "True"
            },
            {
                "Name": "MyChartDataSet_Data_Set_Fields",
                "Value": "{\"date\":{\"dataType\":\"String\"},\"slNo\":{\"aggregate\":\"Sum\",\"dataType\":\"Float\"},\"customerCode\":{\"dataType\":\"String\"},\"customerName\":{\"dataType\":\"String\"},\"address\":{\"dataType\":\"String\"},\"status\":{\"dataType\":\"String\"}}"
            }
        ],
        "Version": "9.0.0",
        "Page": {
            "PageWidth": "8.5in",
            "PageHeight": "11in",
            "RightMargin": "0in",
            "LeftMargin": "0in",
            "TopMargin": "0in",
            "BottomMargin": "0in",
            "Columns": 1,
            "ColumnSpacing": "0.5in",
            "PaperOrientation": "Portrait"
        },
        "DataSources": [
            {
                "Name": "MyChart",
                "ConnectionProperties": {
                    "DataProvider": "JSONEMBED",
                    "ConnectString": "jsondata=[\\n{\\n\"date\":\"07/02/2023\",\"slNo\":1,\"customerCode\":\"123456\",\"customerName\":\"John\",\"address\":\"New York\",\"status\":\"VERIFIED\"},\\n{\"date\":\"07/02/2023\",\"slNo\":2,\"customerCode\":\"789101\",\"customerName\":\"Mary\",\"address\":\"Los Angeles\",\"status\":\"VERIFIED\"},\\n{\"date\":\"04/03/2023\",\"slNo\":1,\"customerCode\":\"112233\",\"customerName\":\"Philip\",\"address\":\"Berlin\",\"status\":\"VERIFIED\"},\\n{\"date\":\"14/03/2023\",\"slNo\":1,\"customerCode\":\"445566\",\"customerName\":\"Mary\",\"address\":\"Paris\",\"status\":\"VERIFIED\"},\\n{\"date\":\"27/03/2023\",\"slNo\":1,\"customerCode\":\"778899\",\"customerName\":\"Elena\",\"address\":\"Manchester\",\"status\":\"NOT VERIFIED\"},\\n{\"date\":\"12/04/2023\",\"slNo\":1,\"customerCode\":\"123123\",\"customerName\":\"Anna\",\"address\":\"London\",\"status\":\"NOT VERIFIED\"},\\n{\"date\":\"12/04/2023\",\"slNo\":1,\"customerCode\":\"456456\",\"customerName\":\"Ford\",\"address\":\"Las Vegas\",\"status\":\"NOT VERIFIED\"},\\n{\"date\":\"12/04/2023\",\"slNo\":1,\"customerCode\":\"789789\",\"customerName\":\"Jane\",\"address\":\"Boston\",\"status\":\"VERIFIED\"}\\n]"
                }
            }
        ],
        "ReportSections": [
            {
                "Type": "Continuous",
                "Name": "ContinuousSection1",
                "Page": {
                    "PageWidth": "8.27in",
                    "PageHeight": "11.69in",
                    "RightMargin": "0in",
                    "LeftMargin": "0in",
                    "TopMargin": "0in",
                    "BottomMargin": "0in",
                    "Columns": 1,
                    "ColumnSpacing": "0.5in",
                    "PaperOrientation": "Portrait"
                },
                "Width": "8.0318in",
                "Body": {
                    "Height": "1.9274in",
                    "ReportItems": [
                        {
                            "Type": "textbox",
                            "Name": "TextBox5",
                            "ZIndex": 37,
                            "CanGrow": true,
                            "KeepTogether": true,
                            "Value": "=\"Date & Time : \" & Globals!ExecutionTime",
                            "Style": {
                                "FontSize": "8pt",
                                "FontWeight": "Bold",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "TextAlign": "Right"
                            },
                            "Left": "5.7538in",
                            "Top": "0.4872in",
                            "Width": "2.2396in",
                            "Height": "0.25in"
                        },
                        {
                            "Type": "textbox",
                            "Name": "TextBox6",
                            "ZIndex": 38,
                            "CanGrow": true,
                            "KeepTogether": true,
                            "Value": "=\"Page \" & Globals!PageNumberInSection & \" of \" & Globals!TotalPagesInSection",
                            "Style": {
                                "FontSize": "8pt",
                                "FontWeight": "Bold",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "TextAlign": "Right"
                            },
                            "Left": "5.9013in",
                            "Top": "0.7097in",
                            "Width": "2.0833in",
                            "Height": "0.25in"
                        },
                        {
                            "Type": "table",
                            "Name": "Table2",
                            "ZIndex": 39,
                            "DataSetName": "MyChartDataSet",
                            "TableColumns": [
                                {
                                    "Width": "0.5032in"
                                },
                                {
                                    "Width": "1.4728in"
                                },
                                {
                                    "Width": "2.3542in"
                                },
                                {
                                    "Width": "1.8333in"
                                },
                                {
                                    "Width": "1.625in"
                                }
                            ],
                            "Header": {
                                "TableRows": [
                                    {
                                        "Height": "0.35in",
                                        "TableCells": [
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox1",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "Sl. No.",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                       
                                                        "FontWeight": "Bold",
                                                        "PaddingLeft": "2pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "TextAlign": "Center",
                                                        "VerticalAlign": "Middle",
                                                        "BackgroundColor": "#cccccc"
                                                    },
                                                    "Width": "0.5032in",
                                                    "Height": "0.35in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox2",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "Customer Code",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                       
                                                        "FontWeight": "Bold",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle",
                                                        "BackgroundColor": "#cccccc"
                                                    },
                                                    "Width": "1.4728in",
                                                    "Height": "0.35in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox3",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "Customer Name",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                       
                                                        "FontWeight": "Bold",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle",
                                                        "BackgroundColor": "#cccccc"
                                                    },
                                                    "Width": "2.3542in",
                                                    "Height": "0.35in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox22",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "Address",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                        "FontFamily": "Roboto",
                                                        "FontWeight": "Bold",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle",
                                                        "BackgroundColor": "#cccccc"
                                                    },
                                                    "Width": "1.8333in",
                                                    "Height": "0.35in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox15",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "Status",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid",
                                                            "Width": "1pt"
                                                        },
                                                       
                                                        "FontWeight": "Bold",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle",
                                                        "BackgroundColor": "#cccccc"
                                                    },
                                                    "Width": "1.625in",
                                                    "Height": "0.35in"
                                                }
                                            }
                                        ]
                                    }
                                ],
                                "RepeatOnNewPage": true
                            },
                            "TableGroups": [
                                {
                                    "Group": {
                                        "Name": "Table2_TableGroup1",
                                        "GroupExpressions": [
                                            "=Fields!date.Value"
                                        ]
                                    },
                                    "Header": {
                                        "TableRows": [
                                            {
                                                "Height": "0.28in",
                                                "TableCells": [
                                                    {
                                                        "Item": {
                                                            "Type": "textbox",
                                                            "Name": "TextBox33",
                                                            "DataElementName": "date",
                                                            "CanGrow": true,
                                                            "KeepTogether": true,
                                                            "Value": "=Fields!date.Value",
                                                            "Style": {
                                                                "Border": {
                                                                    "Style": "Solid"
                                                                },
                                                                "TopBorder": {
                                                                    "Style": "Solid"
                                                                },
                                                                "BottomBorder": {
                                                                    "Style": "Solid"
                                                                },
                                                                "LeftBorder": {
                                                                    "Style": "Solid"
                                                                },
                                                                "RightBorder": {
                                                                    "Style": "Solid"
                                                                },
                                                                
                                                                "FontSize": "9pt",
                                                                "FontWeight": "Bolder",
                                                                "PaddingLeft": "2pt",
                                                                "PaddingRight": "2pt",
                                                                "PaddingTop": "2pt",
                                                                "PaddingBottom": "2pt",
                                                                "VerticalAlign": "Middle"
                                                            },
                                                            "Width": "7.7885in",
                                                            "Height": "0.28in"
                                                        },
                                                        "ColSpan": 5
                                                    },
                                                    null,
                                                    null,
                                                    null,
                                                    null
                                                ]
                                            }
                                        ],
                                        "RepeatOnNewPage": true
                                    }
                                }
                            ],
                            "Details": {
                                "TableRows": [
                                    {
                                        "Height": "0.25in",
                                        "Visibility": {
                                            "Hidden": "False",
                                            "ToggleItem": "TextBox33"
                                        },
                                        "TableCells": [
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox4",
                                                    "DataElementName": "slNo",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "=Fields!slNo.Value",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                       
                                                        "FontSize": "9pt",
                                                        "PaddingLeft": "2pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "TextAlign": "Center",
                                                        "VerticalAlign": "Middle"
                                                    },
                                                    "Width": "0.5032in",
                                                    "Height": "0.25in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox7",
                                                    "DataElementName": "customerCode",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "=Fields!customerCode.Value",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        
                                                        "FontSize": "9pt",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle"
                                                    },
                                                    "Width": "1.4728in",
                                                    "Height": "0.25in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox10",
                                                    "DataElementName": "customerName",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "=Fields!customerName.Value",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        
                                                        "FontSize": "9pt",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle"
                                                    },
                                                    "Width": "2.3542in",
                                                    "Height": "0.25in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox24",
                                                    "DataElementName": "address",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "=Fields!address.Value",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                       
                                                        "FontSize": "9pt",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle"
                                                    },
                                                    "Width": "1.8333in",
                                                    "Height": "0.25in"
                                                }
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "Name": "TextBox16",
                                                    "DataElementName": "status",
                                                    "CanGrow": true,
                                                    "KeepTogether": true,
                                                    "Value": "=Fields!status.Value",
                                                    "Style": {
                                                        "Border": {
                                                            "Style": "Solid"
                                                        },
                                                        "TopBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "LeftBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "RightBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        
                                                        "FontSize": "9pt",
                                                        "PaddingLeft": "5pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "VerticalAlign": "Middle"
                                                    },
                                                    "Width": "1.625in",
                                                    "Height": "0.25in"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            "Left": "0.2433in",
                            "Top": "1.0474in",
                            "Width": "7.7885in",
                            "Height": "0.88in"
                        }
                    ]
                }
            }
        ],
        "DataSets": [
            {
                "Name": "MyChartDataSet",
                "Fields": [
                    {
                        "Name": "date",
                        "DataField": "date[String]"
                    },
                    {
                        "Name": "slNo",
                        "DataField": "slNo[Number]"
                    },
                    {
                        "Name": "customerCode",
                        "DataField": "customerCode[String]"
                    },
                    {
                        "Name": "customerName",
                        "DataField": "customerName[String]"
                    },
                    {
                        "Name": "address",
                        "DataField": "address[String]"
                    },
                    {
                        "Name": "status",
                        "DataField": "status[String]"
                    }
                ],
                "Query": {
                    "DataSourceName": "MyChart"
                },
                "CaseSensitivity": "Auto",
                "KanatypeSensitivity": "Auto",
                "AccentSensitivity": "Auto",
                "WidthSensitivity": "Auto"
            }
        ]
    }

    export const fontFamily = 
    {
        
            "Name": "Report1111111111111111",
            "Width": "0in",
            "Layers": [
                {
                    "Name": "default"
                }
            ],
            "CustomProperties": [
                {
                    "Name": "DisplayType",
                    "Value": "Page"
                },
                {
                    "Name": "SizeType",
                    "Value": "Default"
                },
                {
                    "Name": "PaperOrientation",
                    "Value": "Portrait"
                },
                {
                    "Name": "CollapseWhiteSpace",
                    "Value": "True"
                },
                {
                    "Name": "MyChartDataSet_Data_Set_Fields",
                    "Value": "{\"date\":{\"dataType\":\"String\"},\"slNo\":{\"aggregate\":\"Sum\",\"dataType\":\"Float\"},\"customerCode\":{\"dataType\":\"String\"},\"customerName\":{\"dataType\":\"String\"},\"address\":{\"dataType\":\"String\"},\"status\":{\"dataType\":\"String\"}}"
                }
            ],
            "Version": "9.0.0",
            "Page": {
                "PageWidth": "8.5in",
                "PageHeight": "11in",
                "RightMargin": "0in",
                "LeftMargin": "0in",
                "TopMargin": "0in",
                "BottomMargin": "0in",
                "Columns": 1,
                "ColumnSpacing": "0.5in",
                "PaperOrientation": "Portrait"
            },
            "DataSources": [
                {
                    "Name": "MyChart",
                    "ConnectionProperties": {
                        "DataProvider": "JSONEMBED",
                        "ConnectString": "jsondata=[\\n{\\n\"date\":\"07/02/2023\",\"slNo\":1,\"customerCode\":\"123456\",\"customerName\":\"John\",\"address\":\"New York\",\"status\":\"VERIFIED\"},\\n{\"date\":\"07/02/2023\",\"slNo\":2,\"customerCode\":\"789101\",\"customerName\":\"Mary\",\"address\":\"Los Angeles\",\"status\":\"VERIFIED\"},\\n{\"date\":\"04/03/2023\",\"slNo\":1,\"customerCode\":\"112233\",\"customerName\":\"Philip\",\"address\":\"Berlin\",\"status\":\"VERIFIED\"},\\n{\"date\":\"14/03/2023\",\"slNo\":1,\"customerCode\":\"445566\",\"customerName\":\"Mary\",\"address\":\"Paris\",\"status\":\"VERIFIED\"},\\n{\"date\":\"27/03/2023\",\"slNo\":1,\"customerCode\":\"778899\",\"customerName\":\"Elena\",\"address\":\"Manchester\",\"status\":\"NOT VERIFIED\"},\\n{\"date\":\"12/04/2023\",\"slNo\":1,\"customerCode\":\"123123\",\"customerName\":\"Anna\",\"address\":\"London\",\"status\":\"NOT VERIFIED\"},\\n{\"date\":\"12/04/2023\",\"slNo\":1,\"customerCode\":\"456456\",\"customerName\":\"Ford\",\"address\":\"Las Vegas\",\"status\":\"NOT VERIFIED\"},\\n{\"date\":\"12/04/2023\",\"slNo\":1,\"customerCode\":\"789789\",\"customerName\":\"Jane\",\"address\":\"Boston\",\"status\":\"VERIFIED\"}\\n]"
                    }
                }
            ],
            "ReportSections": [
                {
                    "Type": "Continuous",
                    "Name": "ContinuousSection1",
                    "Page": {
                        "PageWidth": "8.27in",
                        "PageHeight": "11.69in",
                        "RightMargin": "0in",
                        "LeftMargin": "0in",
                        "TopMargin": "0in",
                        "BottomMargin": "0in",
                        "Columns": 1,
                        "ColumnSpacing": "0.5in",
                        "PaperOrientation": "Portrait"
                    },
                    "Width": "8.0318in",
                    "Body": {
                        "Height": "1.9274in",
                        "ReportItems": [
                            {
                                "Type": "textbox",
                                "Name": "TextBox5",
                                "ZIndex": 37,
                                "CanGrow": true,
                                "KeepTogether": true,
                                "Value": "=\"Date & Time : \" & Globals!ExecutionTime",
                                "Style": {
                                    "FontFamily":"Roboto",
                                    "FontSize": "8pt",
                                    "FontWeight": "Bold",
                                    "PaddingLeft": "2pt",
                                    "PaddingRight": "2pt",
                                    "PaddingTop": "2pt",
                                    "PaddingBottom": "2pt",
                                    "TextAlign": "Right"
                                },
                                "Left": "5.7538in",
                                "Top": "0.4872in",
                                "Width": "2.2396in",
                                "Height": "0.25in"
                            },
                            {
                                "Type": "textbox",
                                "Name": "TextBox6",
                                "ZIndex": 38,
                                "CanGrow": true,
                                "KeepTogether": true,
                                "Value": "=\"Page \" & Globals!PageNumberInSection & \" of \" & Globals!TotalPagesInSection",
                                "Style": {
                                    "FontFamily":"Roboto",
                                    "FontSize": "8pt",
                                    "FontWeight": "Bold",
                                    "PaddingLeft": "2pt",
                                    "PaddingRight": "2pt",
                                    "PaddingTop": "2pt",
                                    "PaddingBottom": "2pt",
                                    "TextAlign": "Right"
                                },
                                "Left": "5.9013in",
                                "Top": "0.7097in",
                                "Width": "2.0833in",
                                "Height": "0.25in"
                            },
                            {
                                "Type": "table",
                                "Name": "Table2",
                                "ZIndex": 39,
                                "DataSetName": "MyChartDataSet",
                                "TableColumns": [
                                    {
                                        "Width": "0.5032in"
                                    },
                                    {
                                        "Width": "1.4728in"
                                    },
                                    {
                                        "Width": "2.3542in"
                                    },
                                    {
                                        "Width": "1.8333in"
                                    },
                                    {
                                        "Width": "1.625in"
                                    }
                                ],
                                "Header": {
                                    "TableRows": [
                                        {
                                            "Height": "0.35in",
                                            "TableCells": [
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox1",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "Sl. No.",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontWeight": "Bold",
                                                            "PaddingLeft": "2pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "TextAlign": "Center",
                                                            "VerticalAlign": "Middle",
                                                            "BackgroundColor": "#cccccc"
                                                        },
                                                        "Width": "0.5032in",
                                                        "Height": "0.35in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox2",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "Customer Code",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontWeight": "Bold",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle",
                                                            "BackgroundColor": "#cccccc"
                                                        },
                                                        "Width": "1.4728in",
                                                        "Height": "0.35in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox3",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "Customer Name",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontWeight": "Bold",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle",
                                                            "BackgroundColor": "#cccccc"
                                                        },
                                                        "Width": "2.3542in",
                                                        "Height": "0.35in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox22",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "Address",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontWeight": "Bold",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle",
                                                            "BackgroundColor": "#cccccc"
                                                        },
                                                        "Width": "1.8333in",
                                                        "Height": "0.35in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox15",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "Status",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid",
                                                                "Width": "1pt"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontWeight": "Bold",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle",
                                                            "BackgroundColor": "#cccccc"
                                                        },
                                                        "Width": "1.625in",
                                                        "Height": "0.35in"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "RepeatOnNewPage": true
                                },
                                "TableGroups": [
                                    {
                                        "Group": {
                                            "Name": "Table2_TableGroup1",
                                            "GroupExpressions": [
                                                "=Fields!date.Value"
                                            ]
                                        },
                                        "Header": {
                                            "TableRows": [
                                                {
                                                    "Height": "0.28in",
                                                    "TableCells": [
                                                        {
                                                            "Item": {
                                                                "Type": "textbox",
                                                                "Name": "TextBox33",
                                                                "DataElementName": "date",
                                                                "CanGrow": true,
                                                                "KeepTogether": true,
                                                                "Value": "=Fields!date.Value",
                                                                "Style": {
                                                                    "Border": {
                                                                        "Style": "Solid"
                                                                    },
                                                                    "TopBorder": {
                                                                        "Style": "Solid"
                                                                    },
                                                                    "BottomBorder": {
                                                                        "Style": "Solid"
                                                                    },
                                                                    "LeftBorder": {
                                                                        "Style": "Solid"
                                                                    },
                                                                    "RightBorder": {
                                                                        "Style": "Solid"
                                                                    },
                                                                    "FontFamily": "Roboto",
                                                                    "FontSize": "9pt",
                                                                    "FontWeight": "Bolder",
                                                                    "PaddingLeft": "2pt",
                                                                    "PaddingRight": "2pt",
                                                                    "PaddingTop": "2pt",
                                                                    "PaddingBottom": "2pt",
                                                                    "VerticalAlign": "Middle"
                                                                },
                                                                "Width": "7.7885in",
                                                                "Height": "0.28in"
                                                            },
                                                            "ColSpan": 5
                                                        },
                                                        null,
                                                        null,
                                                        null,
                                                        null
                                                    ]
                                                }
                                            ],
                                            "RepeatOnNewPage": true
                                        }
                                    }
                                ],
                                "Details": {
                                    "TableRows": [
                                        {
                                            "Height": "0.25in",
                                            "Visibility": {
                                                "Hidden": "True",
                                                "ToggleItem": "TextBox33"
                                            },
                                            "TableCells": [
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox4",
                                                        "DataElementName": "slNo",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "=Fields!slNo.Value",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontSize": "9pt",
                                                            "PaddingLeft": "2pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "TextAlign": "Center",
                                                            "VerticalAlign": "Middle"
                                                        },
                                                        "Width": "0.5032in",
                                                        "Height": "0.25in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox7",
                                                        "DataElementName": "customerCode",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "=Fields!customerCode.Value",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontSize": "9pt",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle"
                                                        },
                                                        "Width": "1.4728in",
                                                        "Height": "0.25in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox10",
                                                        "DataElementName": "customerName",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "=Fields!customerName.Value",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontSize": "9pt",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle"
                                                        },
                                                        "Width": "2.3542in",
                                                        "Height": "0.25in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox24",
                                                        "DataElementName": "address",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "=Fields!address.Value",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontSize": "9pt",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle"
                                                        },
                                                        "Width": "1.8333in",
                                                        "Height": "0.25in"
                                                    }
                                                },
                                                {
                                                    "Item": {
                                                        "Type": "textbox",
                                                        "Name": "TextBox16",
                                                        "DataElementName": "status",
                                                        "CanGrow": true,
                                                        "KeepTogether": true,
                                                        "Value": "=Fields!status.Value",
                                                        "Style": {
                                                            "Border": {
                                                                "Style": "Solid"
                                                            },
                                                            "TopBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "BottomBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "LeftBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "RightBorder": {
                                                                "Style": "Solid"
                                                            },
                                                            "FontFamily": "Roboto",
                                                            "FontSize": "9pt",
                                                            "PaddingLeft": "5pt",
                                                            "PaddingRight": "2pt",
                                                            "PaddingTop": "2pt",
                                                            "PaddingBottom": "2pt",
                                                            "VerticalAlign": "Middle"
                                                        },
                                                        "Width": "1.625in",
                                                        "Height": "0.25in"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "Left": "0.2433in",
                                "Top": "1.0474in",
                                "Width": "7.7885in",
                                "Height": "0.88in"
                            }
                        ]
                    }
                }
            ],
            "DataSets": [
                {
                    "Name": "MyChartDataSet",
                    "Fields": [
                        {
                            "Name": "date",
                            "DataField": "date[String]"
                        },
                        {
                            "Name": "slNo",
                            "DataField": "slNo[Number]"
                        },
                        {
                            "Name": "customerCode",
                            "DataField": "customerCode[String]"
                        },
                        {
                            "Name": "customerName",
                            "DataField": "customerName[String]"
                        },
                        {
                            "Name": "address",
                            "DataField": "address[String]"
                        },
                        {
                            "Name": "status",
                            "DataField": "status[String]"
                        }
                    ],
                    "Query": {
                        "DataSourceName": "MyChart"
                    },
                    "CaseSensitivity": "Auto",
                    "KanatypeSensitivity": "Auto",
                    "AccentSensitivity": "Auto",
                    "WidthSensitivity": "Auto"
                }
            ]
        }
    
    