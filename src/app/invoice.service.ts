import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {SalesInvoice} from "./Models/sales-invoice";


const data = {
  "data": {
    "salesInvoices": [
      {
        "id": "628ceaecb9086360a19ec89f",
        "header": {
          "invoiceNumber": "19",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 47000.0,
          "chargeRate": 300.0,
          "totalDuration": 160,
          "invoiceDate": "2022-05-24",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Monthly Service - Magic Cloud",
            "duration": 160,
            "amount": 48000.0,
            "invoiceNumber": "1",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "628cedeab9086360a19ec8a0",
        "header": {
          "invoiceNumber": "14",
          "configurationId": 1,
          "clientName": "Charles Teversham - Old Rate",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 7480.0,
          "chargeRate": 220.0,
          "totalDuration": 34,
          "invoiceDate": "2022-03-01",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Manual Invoice 14",
            "duration": 34,
            "amount": 7480.0,
            "invoiceNumber": "2",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "628ceeeeb9086360a19ec8a1",
        "header": {
          "invoiceNumber": "15",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 5037.0,
          "chargeRate": 219.0,
          "totalDuration": 23,
          "invoiceDate": "2022-03-11",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Manual Invoice 15 - Billing Module",
            "duration": 23,
            "amount": 5037.0,
            "invoiceNumber": "3",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "628cf4e4b9086360a19ec8a2",
        "header": {
          "invoiceNumber": "16",
          "configurationId": 1,
          "clientName": "Charles Teversham - Old Rate",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 5940.0,
          "chargeRate": 220.0,
          "totalDuration": 27,
          "invoiceDate": "2022-04-14",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Manual Invoice 16",
            "duration": 27,
            "amount": 5940.0,
            "invoiceNumber": "4",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "628cf6efb9086360a19ec8a3",
        "header": {
          "invoiceNumber": "17",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 5913.0,
          "chargeRate": 219.0,
          "totalDuration": 27,
          "invoiceDate": "2022-04-27",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Mandual Invoice 17",
            "duration": 27,
            "amount": 5913.0,
            "invoiceNumber": "5",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "628cf929b9086360a19ec8a4",
        "header": {
          "invoiceNumber": "18",
          "configurationId": 1,
          "clientName": "Charles Teversham - Old Rate",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 15840.0,
          "chargeRate": 220.0,
          "totalDuration": 72,
          "invoiceDate": "2022-05-05",
          "status": "CANCELLED",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Manual Invoice 18",
            "duration": 72,
            "amount": 15840.0,
            "invoiceNumber": "6",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "62a6e1d5314c4654dfae6a75",
        "header": {
          "invoiceNumber": "20",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 5694.0,
          "chargeRate": 219.0,
          "totalDuration": 26,
          "invoiceDate": "2022-06-13",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Initial work on fullscreen calendar component",
            "duration": 26,
            "amount": 5694.0,
            "invoiceNumber": "20",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "62b54fc11320c87170be6b2f",
        "header": {
          "invoiceNumber": "21",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 36000.0,
          "chargeRate": 300.0,
          "totalDuration": 120,
          "invoiceDate": "2022-06-22",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Incident API/Client changes: Update MagicBox API to allow retrieving GroupStores with ComapyId.  Use the CompanyId to filter teneants using the  CO_ID on the Incident assignment dropdown",
            "duration": 16,
            "amount": 4800.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Petty Cash Changes:  Add mechenism  to auto detect adjustment accounts such (float control, theft, etc).  \nMake changes to allow filtering records from the \"Accounting\" table  using RefID for configured adjustment accounts.   \nDocument upload must be optional when capturing.  \nAdd missing FinYear and FinPeriod fields in petty cash transactions",
            "duration": 40,
            "amount": 12000.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Magic Box authenticator token and audience validation fails ",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "L&B Link Server Authentication Investigation",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "MagicProc remove and insert button issue. (excludes missing price list issue)",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "MagicBox Libraries: Implement loader and toast service npm package. This ecludes integration with magicproc as the work is done in npm libraries first to reduce code change made on MagicProc code base",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Analysis sessions with Brad: solution petty cash adjustments and changes on  Incident app. ",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Bootlegger Projects - upgrade sage evolution. recover digiclient project and upgrade to v10. Test sessions on the bootleggers server.",
            "duration": 14,
            "amount": 4200.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Pastel Agent changes and dubugging sessions with Charles",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Unmapped invoice issues",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "21",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "62c29cd40e073c436820cbfd",
        "header": {
          "invoiceNumber": "22",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 8760.0,
          "chargeRate": 219.0,
          "totalDuration": 40,
          "invoiceDate": "2022-07-04",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Billing Fixes - address padding, remove debtors GUID ID, edit materials decription, pdf view to use proper file name with invoiceNo on donwload",
            "duration": 8,
            "amount": 1752.0,
            "invoiceNumber": "22",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Implement theatre slate",
            "duration": 6,
            "amount": 1314.0,
            "invoiceNumber": "22",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Complete consult",
            "duration": 6,
            "amount": 1314.0,
            "invoiceNumber": "22",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Discharge patient",
            "duration": 6,
            "amount": 1314.0,
            "invoiceNumber": "22",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Schedule Surgery",
            "duration": 12,
            "amount": 2628.0,
            "invoiceNumber": "22",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Surgery types controller",
            "duration": 2,
            "amount": 438.0,
            "invoiceNumber": "22",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "62de48bdfa84fe3accd29600",
        "header": {
          "invoiceNumber": "23",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 41100.0,
          "chargeRate": 300.0,
          "totalDuration": 137,
          "invoiceDate": "2022-07-25",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Financial Invoice rework and cleanup",
            "duration": 26,
            "amount": 7800.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Magic Box Ribbon .Net upgrade",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Investigate price list  issues resulting in mapping error",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Magic Box Ribbon- Document upload issue",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Magic Box Report Manager  Investigation and fixes",
            "duration": 13,
            "amount": 3900.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Magic Box API - Add user roles to tenant query",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Life & Brad Linked server and intial job setup",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "MagicBox Incident - UI work to filter tendants  by role INCIDENT_MNGR ",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "MagicBox Incident - New UI design from Brad - issue listing",
            "duration": 22,
            "amount": 6600.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "MagicBox Incident  - New UI design - issue activities",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "MagicBox Incident - plain text filters and new column",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "MagicBox Incident - File/Document manager API",
            "duration": 16,
            "amount": 4800.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "Domain setup: devmagiccloud.co.za link with digital ocean",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "23",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "62f28972870ddb1c5b478519",
        "header": {
          "invoiceNumber": "24",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 12483.0,
          "chargeRate": 219.0,
          "totalDuration": 57,
          "invoiceDate": "2022-08-10",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Adding forms,smtp, contacts types and user management on the web  version",
            "duration": 39,
            "amount": 8541.0,
            "invoiceNumber": "24",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Phase 1 - Adding functionality to manage icd,material,procedure codes, sites and consult types on the web version",
            "duration": 18,
            "amount": 3942.0,
            "invoiceNumber": "24",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63065bd4870ddb1c5b47851a",
        "header": {
          "invoiceNumber": "25",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 49200.0,
          "chargeRate": 300.0,
          "totalDuration": 164,
          "invoiceDate": "2022-08-25",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Magic Cloud Authentication Module.  \n- Setup keycloak library on docker behind NGINX.  \n- Configure HTTPS for NGINX. \n- Setup docker-compose deployment file for digital ocean.   \n- Create Digtal Ocean droplet and link it to Afrihost devmagiccloud.co.za domain.\n",
            "duration": 52,
            "amount": 15600.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Magic Cloud Authentication Module - Keycloak data agent API for copying users from MagicBox Central to keycloal with TenantID as an Attribute",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "IM - Incidet Manager auth re-write with keycloak library",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Complte LB SQL jobs (POS_Sales and tender) - Add final mappings for CompanyId and WaiterNumber ",
            "duration": 10,
            "amount": 3000.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Microsoft Graph OneDrive Implementation With Brand.   This was done to replace the google drive file upload on the incident app.  The new API now use MS OneDrive/SharePint to store files ",
            "duration": 22,
            "amount": 6600.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Magic Cloud App Deployment to Digital Ocean - dockerize Darryl's API assemblies  and deploy on Digital Ocean behind NGINX server runnning the Order App frondEnd.",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Replicate Order App deployment to digital Ocean for the Beta Version - This required a seperate VM/droplet configuration.",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Item master and Item group improvements",
            "duration": 16,
            "amount": 4800.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Ribbon BUG:  Document Manager failing to upload PDF documents at Client's Machine ",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Incident App DB Migration to new Servers.  Manual Create tables and moving existing data. ",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "IM Improvements - Spinner and toast(previous on the library) -  Resizing  header to use less space. ",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "Add CI-Build pipeline to magicproc source - This means everytime we push code to github a CI build will be triggered to create docker images and push them to Digital Ocean",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "Order App Bootstrap mantainance and upgrade (bootstrap 5)",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "25",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "632e0b52870ddb1c5b47851b",
        "header": {
          "invoiceNumber": "26",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 39900.0,
          "chargeRate": 300.0,
          "totalDuration": 133,
          "invoiceDate": "2022-09-23",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Magic Proc API extraction from Darryl's source code. Create Nuget packages for all 11 depandencies and publish to github.",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Create CI pipeline using github actions to automate build and deploying of Magic Proc API",
            "duration": 10,
            "amount": 3000.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Bootstrap upgrade issues - Fix upgrade side effects- UI alignments and date picker issues. This is not the UI improvement work",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Item master and item group bugs issues. Handling uploads and updates on item master and item group",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Data loading peformance issues and bug fixes. Applies filters on all http calls and implement catching.",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Price list modification. Remove old NGRX statement code and add insert functionality",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Implement API key strategy",
            "duration": 10,
            "amount": 3000.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "3rd party API Integration endpoints: Order List endpint for Moditar",
            "duration": 7,
            "amount": 2100.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "3rd party API Integration endpoints: Price List endpint for Moditar",
            "duration": 7,
            "amount": 2100.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Update docker deployment scripts. Update NGINX to allow case insensitive path matching. Expose magic proc through swagger for both test and prod",
            "duration": 13,
            "amount": 3900.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "Update magi proc API  to only return orders for orders for the past 60 days.  A new custom endpoint was created for this.",
            "duration": 10,
            "amount": 3000.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "IM - Incident App backend pagination and sorting - As the data grows in that app that load time also increases, implementing backend pagination allows us to only fetch top 10 records for display and get more on demand when user click next page in the UI pager: Only backend work.",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "IM - backend pagination integration with Angular Material Data table",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "26",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "633d3c3f870ddb1c5b47851c",
        "header": {
          "invoiceNumber": "27",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 16863.0,
          "chargeRate": 219.0,
          "totalDuration": 77,
          "invoiceDate": "2022-10-05",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Adding templates, organizations and Contracts",
            "duration": 21,
            "amount": 4599.0,
            "invoiceNumber": "27",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Calendar bug fixes and improvements",
            "duration": 16,
            "amount": 3504.0,
            "invoiceNumber": "27",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "ICD, Procedure and Material codes bug fixes and mobile view fixes",
            "duration": 18,
            "amount": 3942.0,
            "invoiceNumber": "27",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "User management, Consult, SMTP big fixes",
            "duration": 13,
            "amount": 2847.0,
            "invoiceNumber": "27",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Invoicing & Staments bug fixes",
            "duration": 9,
            "amount": 1971.0,
            "invoiceNumber": "27",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "635517c978bde82641241581",
        "header": {
          "invoiceNumber": "28",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 35100.0,
          "chargeRate": 300.0,
          "totalDuration": 117,
          "invoiceDate": "2022-10-23",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Supplier Skin Config API endpoint  -  This is the endpoint that fetching supplier master record to resolve branding and styling assests",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Magic Proc  Customer and Suppler improvements",
            "duration": 5,
            "amount": 1500.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Magic Proc Beta latency issue investigation and migration to  AWS",
            "duration": 14,
            "amount": 4200.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Magic Proc Order Integration endpoint updates -  Apply filters",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "IM bug fixes and filter improvements - Updating 'My Tasks' filter to return  both issues assigned and issues created.  Fix pagination on 'My Tasks' filter(backend and frontend)",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Magic Proc subdomains- configura NGINX for new domain routing. This is to prevevent people from using IP address that may change and use subdomain such as skin.magicproc.co.za",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Magic Proc Orders, Shared, OrderList extraction NPM modules for sharing with other apps",
            "duration": 28,
            "amount": 8400.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Supplier Skin Implementation",
            "duration": 33,
            "amount": 9900.0,
            "invoiceNumber": "28",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "635cd5df0d2ad45d44d91d71",
        "header": {
          "invoiceNumber": "29",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 1482.78,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2022-10-28",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Digital Ocean Hosting -September",
            "duration": 0,
            "amount": 1482.78,
            "invoiceNumber": "29",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63613d3bb5f28724dd934fa8",
        "header": {
          "invoiceNumber": "30",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 1363.2,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2022-11-01",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Digital Ocean Invoice - End of  October",
            "duration": 0,
            "amount": 1363.2,
            "invoiceNumber": "30",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "636c8f62b3a9894bda4b02da",
        "header": {
          "invoiceNumber": "31",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 10293.0,
          "chargeRate": 219.0,
          "totalDuration": 47,
          "invoiceDate": "2022-11-10",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Form builder and calender bugs fixes",
            "duration": 12,
            "amount": 2628.0,
            "invoiceNumber": "31",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Implement credit note component",
            "duration": 10,
            "amount": 2190.0,
            "invoiceNumber": "31",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Implement Custom Lists, Manage folders, Application Keys,  User Signature",
            "duration": 21,
            "amount": 4599.0,
            "invoiceNumber": "31",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Shortcut Keys",
            "duration": 4,
            "amount": 876.0,
            "invoiceNumber": "31",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "6380cd7c2444450daf150390",
        "header": {
          "invoiceNumber": "32",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 39600.0,
          "chargeRate": 300.0,
          "totalDuration": 132,
          "invoiceDate": "2022-11-25",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Google drive file upload User Interface.",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "www.magciclouddev.co.za Certificate issues and renewal.",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Order List Additions",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Magic Box Ribbon Allocations",
            "duration": 19,
            "amount": 5700.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "I.M feature Improvements.",
            "duration": 27,
            "amount": 8100.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Supplier Skin bug fixes and improvments. ",
            "duration": 24,
            "amount": 7200.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Github CI build and NPM fixes",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Login Component- Feature reverted",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Magic Proc bug fixes and UI improvements.  Stock and financial invoice bug fixes",
            "duration": 27,
            "amount": 8100.0,
            "invoiceNumber": "32",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "6390516445264a65133bdc12",
        "header": {
          "invoiceNumber": "33",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 1511.71,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2022-12-07",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "November Cloud Hosting - Digital Ocean",
            "duration": 0,
            "amount": 473.48,
            "invoiceNumber": "33",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "November Cloud Hosting - AWS",
            "duration": 0,
            "amount": 1038.23,
            "invoiceNumber": "33",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63929d218ed1f0410e344d13",
        "header": {
          "invoiceNumber": "34",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 17082.0,
          "chargeRate": 219.0,
          "totalDuration": 78,
          "invoiceDate": "2022-12-09",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Invoice bug fixes",
            "duration": 18,
            "amount": 3942.0,
            "invoiceNumber": "34",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Credit note,debtors ledger,statements and reciepting  bug fixes",
            "duration": 26,
            "amount": 5694.0,
            "invoiceNumber": "34",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Configure Diary",
            "duration": 12,
            "amount": 2628.0,
            "invoiceNumber": "34",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "UI clean feedback",
            "duration": 14,
            "amount": 3066.0,
            "invoiceNumber": "34",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Implment working hours on diary",
            "duration": 8,
            "amount": 1752.0,
            "invoiceNumber": "34",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63a71e8ee114ff0a68fb1a82",
        "header": {
          "invoiceNumber": "35",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 37200.0,
          "chargeRate": 300.0,
          "totalDuration": 124,
          "invoiceDate": "2022-12-22",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Blob storage files system zip migration to OneDrive  (\nRe-create file upload controller withouth asking Darryl to make a change in his framework.  Use Ms Graph to implement OneDrive.) -v1",
            "duration": 23,
            "amount": 6900.0,
            "invoiceNumber": "35",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Magic Box API changes to support new endpoints, filers and sorting",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "35",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Implement loading indicator - v1",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "35",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Order App Menu Items Rework( Re-arrange menu items in drop downs, Price List upload, order filters, price list migration to npm module , bug fixes)",
            "duration": 37,
            "amount": 11100.0,
            "invoiceNumber": "35",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Internal Email Management Microservice(Simple Email without attachments, mutiple reciepients, physical file attachments, base64File attachments, AWS SES for high deliverability) - V1",
            "duration": 44,
            "amount": 13200.0,
            "invoiceNumber": "35",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Improved alert messaging and clean up default js alert()",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "35",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Blob storage - Frontend angular adjustments",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "35",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63be4d3f86fc5725d97ce792",
        "header": {
          "invoiceNumber": "36",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 1464.23,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-01-11",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Digital Ocean Hosting Invoice",
            "duration": 0,
            "amount": 334.1,
            "invoiceNumber": "36",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "AWS Hosting Invoice",
            "duration": 0,
            "amount": 1130.13,
            "invoiceNumber": "36",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63d2029329c3ba2a78fcfb65",
        "header": {
          "invoiceNumber": "37",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 33900.0,
          "chargeRate": 300.0,
          "totalDuration": 113,
          "invoiceDate": "2023-01-24",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "User Registration UI ",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "keycloak agent API endpoint to handle registration integrated with  MagicBox central",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "MagicBox SQL stored procedure and SQL script to handle self-registration ",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Update magicproc  API to handle multiple tokens.  this is to support both the current authentication  and the new Keycloak authentication",
            "duration": 10,
            "amount": 3000.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Update magicproc client(UI) to present two login options. Add keyclaok registration in addition to the current one",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Update keycloak default login screen to use custom resgitration form integrated with magicbox.",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Migrate auth module from Digital Ocean to AWS to reduce hosting cost.  $18 hosting on  digital ocean will be used for more resource in AWS as we scale.  need to move from devmagiccloud.co.za domain on DO to magicproc.co.za to AWS.  Setup nginx and recreated certicates",
            "duration": 21,
            "amount": 6300.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Update Emai API templating to AWS email template - Requires use of AWS CLI",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Implment CI build to deploy the new registraion commponent (API and registration form at register.magicpro.co.za)",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Update Incident App to use auth module from AWS via auth.magicproc.co.za",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "37",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63dce9f1fe87406693d995fd",
        "header": {
          "invoiceNumber": "39",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 1569.48,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-02-03",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Digital Ocean Hosting",
            "duration": 0,
            "amount": 342.09,
            "invoiceNumber": "39",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "AWS Hosting",
            "duration": 0,
            "amount": 1227.39,
            "invoiceNumber": "39",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63df74d54e69b500e00470c1",
        "header": {
          "invoiceNumber": "40",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 18396.0,
          "chargeRate": 219.0,
          "totalDuration": 84,
          "invoiceDate": "2023-02-05",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "WebRTC reasearch and Spike",
            "duration": 44,
            "amount": 9636.0,
            "invoiceNumber": "40",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Twilio SMS & verification research and implementation",
            "duration": 18,
            "amount": 3942.0,
            "invoiceNumber": "40",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Dropbox integration research",
            "duration": 8,
            "amount": 1752.0,
            "invoiceNumber": "40",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "OneDrive integration research & implementation via MS  Graph",
            "duration": 14,
            "amount": 3066.0,
            "invoiceNumber": "40",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63df75aa4e69b500e00470c2",
        "header": {
          "invoiceNumber": "41",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 12702.0,
          "chargeRate": 219.0,
          "totalDuration": 58,
          "invoiceDate": "2023-02-05",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Reports and dashboard implentation",
            "duration": 34,
            "amount": 7446.0,
            "invoiceNumber": "41",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "billing module bug fixes ( invoice total ,  pdf viewer and missing code & desc on statements)",
            "duration": 6,
            "amount": 1314.0,
            "invoiceNumber": "41",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Invoice export to Xero",
            "duration": 18,
            "amount": 3942.0,
            "invoiceNumber": "41",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "63f9bd1109bbab6ab6c6478f",
        "header": {
          "invoiceNumber": "42",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 43200.0,
          "chargeRate": 300.0,
          "totalDuration": 144,
          "invoiceDate": "2023-02-25",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Update All assets to build docker images and publish to AWS instead of Digital Ocean   ",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Implement request password reset screen",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Implement forgot password screen",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Implement fogot password API changes - API handling password change",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Migrate Magic CLoud Messaging from Personal Google Cloud to Magic Proc AWS\t",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Inboud Email Handler - AWS Lambda implementation with S3\t",
            "duration": 26,
            "amount": 7800.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Supplier Skin to Use new email service by updating npm packages to the latest from the main app",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Price List Upload - handle large price list lines- New API endpoint\t",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Magic Cloud Messaging  - WhatsApp integration.\t",
            "duration": 28,
            "amount": 8400.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Part 2 - Magic Cloud Registration - add default userId, companyId to keycloak\t",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "Adding new items to existing orders\t",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "Auto refresh orders screen after placing an order",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "AWS organization management - Manage user, roles and polices.",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 14,
            "description": "add new domian to handle account management - accounts.magicproc.co.za with https\t",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 15,
            "description": "SSL issues deploying accounts API with magic box central \t",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "42",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64072960a134a900aea20384",
        "header": {
          "invoiceNumber": "43",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 1478.72,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-03-07",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "FIRM DEV Hosting Invoice - AWS",
            "duration": 0,
            "amount": 1478.72,
            "invoiceNumber": "43",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "6415f1afa648f235cd73815a",
        "header": {
          "invoiceNumber": "44",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 13578.0,
          "chargeRate": 219.0,
          "totalDuration": 62,
          "invoiceDate": "2023-03-18",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Implement 'select' and 'unselect all' on diary",
            "duration": 2,
            "amount": 438.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Complete XERO export",
            "duration": 7,
            "amount": 1533.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Diary drag and drop into other time slots",
            "duration": 4,
            "amount": 876.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Update reports to be parameterized",
            "duration": 4,
            "amount": 876.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Investigate material codes prices not showing",
            "duration": 2,
            "amount": 438.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Add consult referesh button on diary",
            "duration": 2,
            "amount": 438.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Add space between amount on view for readability",
            "duration": 4,
            "amount": 876.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Sort Debtors ledger",
            "duration": 2,
            "amount": 438.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Show over paid invoices on  debtors ledger",
            "duration": 4,
            "amount": 876.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Show over credit noted invoices on debtors ledger",
            "duration": 4,
            "amount": 876.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "Investigate and fix statement emailing issue from debtors ledger",
            "duration": 6,
            "amount": 1314.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "Split payment accross invoices - show allocation on statement - not total payment",
            "duration": 4,
            "amount": 876.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "Rounding issues and handling comma as thousand seperator",
            "duration": 12,
            "amount": 2628.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 14,
            "description": "Fix issues with venue, remove leading zero on payments, remove logo on statements , update org reg no",
            "duration": 5,
            "amount": 1095.0,
            "invoiceNumber": "44",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64227470d3b33e10afd527e4",
        "header": {
          "invoiceNumber": "45",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 37800.0,
          "chargeRate": 300.0,
          "totalDuration": 126,
          "invoiceDate": "2023-03-27",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Move order emailing logic to a service.",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Remove http call many alerts",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Update Place and Email to Place and Send",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Remove Old menu items - Use new ones with drop down",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Allow conditional enditing oder Par and Count based Master vs Custom",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Update Messaging API to act on triggers from Lambda. Use from email to look up customer record and get Cell number to send whatsapp -   New  message type Enum. New API endpoint  to do master look.  Update lambda.",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Stock invocie bugs and clean up",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Order List headers dont load when you log in for the first time",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Ability to add new items on the  order - Adhoc/Price List",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Supplier additions to allow messaging. Add Message type, whatsapp and cell on SQL. update API to return the properties.",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "Rework messaging service in the front-end to conform with \"Place & Send\" for EMAIL and WhatsApp",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "Change external price list endpoint to take single object instead of list",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "Re-activate registrastion screen. ",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 14,
            "description": "Search button doesnt work on Create Order List screen",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 15,
            "description": "Add a spinner during upload PL, and also during creating an Order List",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 16,
            "description": "When you place an order in the skin, it must go to the orders page and refresh - currently it just stays on the order creation page.   ",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 17,
            "description": "Apply the pager on supplier selector. This meaning exporting the page to shared reusable componded.",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 18,
            "description": "Assign new IDs when saving new price lists via Moditor",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 19,
            "description": "IM connectivity issues debugging.  IIS and SQL",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 20,
            "description": "Move file amanger API from personal google cloud to MagicProc aws. This is the API used to upload skin Images to onedrive. currntly broken.  need to update UI  to use new endpoint",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 21,
            "description": "Update Orders pages to always fetch the latest",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 22,
            "description": "Add new endpoint for supplier skin to fetch oder lists by companyID",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 23,
            "description": "Rework supplier skin to use companyId instead if configured OrderListHeaderID. Default navigation to order-list when companyId has a signle OL record. Implement pager for multiple order list linked to companyID",
            "duration": 24,
            "amount": 7200.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 24,
            "description": "AWS VM out space  causing down time - incread test/beta VM to 15GB. ",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "45",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "642fff0ee4e5c71e04351dba",
        "header": {
          "invoiceNumber": "46",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 1724.5,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-04-06",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Hosting Invoice - March",
            "duration": 0,
            "amount": 1724.5,
            "invoiceNumber": "46",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "6449fedac9bb9c33e4ae191f",
        "header": {
          "invoiceNumber": "52",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 42300.0,
          "chargeRate": 300.0,
          "totalDuration": 141,
          "invoiceDate": "2023-04-25",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Allow IM to use API key AUth  - Create Incidents Outside WebApp",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "IM Update to use Messageing API - prep IM to send data to Messaging API and implement new template and handlers in the messaging API",
            "duration": 38,
            "amount": 11400.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "\nMagicProc UI registration updates submit new fields - 1\n",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "\nMagicProcAPI new registration handler",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Email update from cloud@ to orders@ - AWS ses, route53, afrihist chngaes",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Price List upload UI changes and JSON cleanup and formating from CSV",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Pricel List upload API implementation",
            "duration": 14,
            "amount": 4200.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "MagicProc Menu cleanup - remove old menu items,  combine configuration menues-  add auth on config menus",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "WhatApp Cloud API FileName issue",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Github build Space Issues - investigation - Clean/delete artficats to free space up and make automatic builds work again",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "MagicProc Order List edit changes -  sorting, selection and grid content update",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "MagicProc grid scrolling issue",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "MagicProc and Skin navigation issue",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 14,
            "description": "\nPhumzile - Supplier/Customer address selection - One to Many address",
            "duration": 21,
            "amount": 6300.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 15,
            "description": "SSL Certifacte renew",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 16,
            "description": "Order Sending - Optional CC",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 17,
            "description": "Pre-prod environment setup",
            "duration": 14,
            "amount": 4200.0,
            "invoiceNumber": "52",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64536f46f82469336fe61d1f",
        "header": {
          "invoiceNumber": "62",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 2322.96,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-05-03",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Anual Domain Renewal",
            "duration": 0,
            "amount": 97.0,
            "invoiceNumber": "62",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Monthly domian subscription - devmagiccloud.co.za",
            "duration": 0,
            "amount": 69.0,
            "invoiceNumber": "62",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Monthly domian subscription - magicproc.co.za",
            "duration": 0,
            "amount": 59.0,
            "invoiceNumber": "62",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "AWS hosting",
            "duration": 0,
            "amount": 2097.96,
            "invoiceNumber": "62",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "645732b28636f2384650756f",
        "header": {
          "invoiceNumber": "64",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 21300.0,
          "chargeRate": 300.0,
          "totalDuration": 71,
          "invoiceDate": "2023-05-06",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Vital Signs",
            "duration": 28,
            "amount": 8400.0,
            "invoiceNumber": "64",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "CSV export",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "64",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Edit closed admisions-  prepopulate  ICD codes",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "64",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "cedit notes and payments as invoices / statement lines with ICD codes",
            "duration": 22,
            "amount": 6600.0,
            "invoiceNumber": "64",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "billing statement filters and bug fixes",
            "duration": 16,
            "amount": 4800.0,
            "invoiceNumber": "64",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "646e5a75da3aec2080602ce7",
        "header": {
          "invoiceNumber": "65",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 39900.0,
          "chargeRate": 300.0,
          "totalDuration": 133,
          "invoiceDate": "2023-05-24",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Global Price List  rendering issues",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "One to Many Selection Improvements",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Group level order list rendering",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Contact management link to supplier and customer",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Onbarding UI wizard",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Onbarding API changes",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "MagicProcSequence API Service ",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "MagicProc UI  - Edit Order size fixes",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Supplier / Customer  message(EMAIL/WHATSAPP) template changes",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "MagicProc App messaging Service - Dedicated messaging for Customer And Supplier",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "Remove Email CC for customer",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "angular upgrade to angular 15. This was also needed to improve CI and local dev build",
            "duration": 14,
            "amount": 4200.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "Update AWS lamba no find bounces using Order number in Email Subject instead of CC",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 14,
            "description": "Update message messaging api to lookig customer using order number instead of cc'd email",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 15,
            "description": "Beta environment space issues - AWS",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 16,
            "description": "Include Par and Count on Excel Export",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 17,
            "description": "Address Selection Feedback - Make address selection first step of creating and placing an order",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 18,
            "description": "BETA price list upload now work - Move price list upload logic to service and change URL",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 19,
            "description": "Price List bug - User and magicBox User Id Mixed up",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 20,
            "description": "Acees Controll on order list - diable editing of group level order lists",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 21,
            "description": "Price List header title change",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 22,
            "description": "Fixing http spinner and alert messaging",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "65",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "647f10db9c598c0e1496f7b3",
        "header": {
          "invoiceNumber": "66",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 2392.73,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-06-06",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Afrihost domains",
            "duration": 0,
            "amount": 128.0,
            "invoiceNumber": "66",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "AWS Hosting",
            "duration": 0,
            "amount": 2264.73,
            "invoiceNumber": "66",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64846e3470a9f90ae20c4bfd",
        "header": {
          "invoiceNumber": "67",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 15300.0,
          "chargeRate": 300.0,
          "totalDuration": 51,
          "invoiceDate": "2023-06-10",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Vital Signs - New Additions and bug fixes",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "67",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Billing clean up and bug fixes -Statements and Invoices",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "67",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Payment Re-Allocations",
            "duration": 29,
            "amount": 8700.0,
            "invoiceNumber": "67",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "649139c98477dd0475da16d9",
        "header": {
          "invoiceNumber": "68",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 44700.0,
          "chargeRate": 300.0,
          "totalDuration": 149,
          "invoiceDate": "2023-06-20",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Supplier Selector -V1 with popup in the main App version",
            "duration": 10,
            "amount": 3000.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Stock invoice calculation bug fixes",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Onboarding  Wizard Step - Order List upload v2 ",
            "duration": 12,
            "amount": 3600.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Main App Order List Edit",
            "duration": 8,
            "amount": 2400.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Add option to include global price list when adding Order List Line from price list",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "V1 Order List Upload - complete implementation and bug fixes",
            "duration": 33,
            "amount": 9900.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Onboarding Setup - DevOps : Dmain setup, Https, nginx hosting, CI/CD github action build to AWS ECR",
            "duration": 38,
            "amount": 11400.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Bug Fixes - configure button fixes, make configure reflect immediate changes, QTY issues on orders. ",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Implement solution to generate auth token for requests made in the public onboarding app",
            "duration": 13,
            "amount": 3900.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Update onboarding endpoint to: 1. Return supplier record, 2. validate login user. 3. Validate customer/supplier email - API and UI changes",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "External Onboarding Supplier Selector - Different from the initial version. with filters and create form.",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "68",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64a3ece5dbda5e218059fe9e",
        "header": {
          "invoiceNumber": "69",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 2595.82,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-07-04",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "AWS Hosting",
            "duration": 0,
            "amount": 2595.82,
            "invoiceNumber": "69",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64a7b4e7db2b6a759ebbcfd2",
        "header": {
          "invoiceNumber": "70",
          "configurationId": 1,
          "clientName": "Alchemed",
          "clientEmail": "grant@alchemed.com",
          "invoiceAmount": 7050.0,
          "chargeRate": 300.0,
          "totalDuration": 11,
          "invoiceDate": "2023-07-07",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "QA Consultant - Exploratory testing & test case creating",
            "duration": 0,
            "amount": 3750.0,
            "invoiceNumber": "70",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Angular upgrade",
            "duration": 6,
            "amount": 1800.0,
            "invoiceNumber": "70",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "What base implementation",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "70",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Added cutsomer name and fixed payment date-range on payment allocation",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "70",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64bfea65d7b3f620f66abefd",
        "header": {
          "invoiceNumber": "71",
          "configurationId": 1,
          "clientName": "Charles Teversham",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 42900.0,
          "chargeRate": 300.0,
          "totalDuration": 143,
          "invoiceDate": "2023-07-25",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Global price list configuration - include in order lists",
            "duration": 5,
            "amount": 1500.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Skin version update and bug fixes",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Onboarding Backend - Messaging configuration",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "Onboarding rework - UI changes - upload break down- supplier validation - supplier selector demo-try and bug fixes",
            "duration": 38,
            "amount": 11400.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "Move customOrderListItemAdder to shared and NPM packages",
            "duration": 7,
            "amount": 2100.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Stock invoice changes and bug fixes",
            "duration": 2,
            "amount": 600.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Order List Header Configuration and bug fixes",
            "duration": 9,
            "amount": 2700.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "Magic Proc new UI theme",
            "duration": 33,
            "amount": 9900.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "API endpoint to delete order and UI changes to allow delete",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Integration Price List Upload (Moditor integration) - changle implementation to follow PL upload with OL creation",
            "duration": 10,
            "amount": 3000.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "Update external Orders API to allow null companyId",
            "duration": 1,
            "amount": 300.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 12,
            "description": "Add option to add lines to invoices",
            "duration": 5,
            "amount": 1500.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 13,
            "description": "Rework APP supplier selector to match onboarding app",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 14,
            "description": "Github actions beta deployment and docker tagging - date based versioning",
            "duration": 14,
            "amount": 4200.0,
            "invoiceNumber": "71",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64cc9dc0d6af8105ea64a927",
        "header": {
          "invoiceNumber": "72",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 2817.94,
          "chargeRate": 300.0,
          "totalDuration": 0,
          "invoiceDate": "2023-08-04",
          "status": "PAID",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "AWS Hosting",
            "duration": 0,
            "amount": 2661.94,
            "invoiceNumber": "72",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "anual domain renewal - magicproc ",
            "duration": 0,
            "amount": 97.0,
            "invoiceNumber": "72",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "magicproc.co.za montly hosting",
            "duration": 0,
            "amount": 59.0,
            "invoiceNumber": "72",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      },
      {
        "id": "64e844c83b61543c37b74195",
        "header": {
          "invoiceNumber": "73",
          "configurationId": 1,
          "clientName": "Magic Cloud (Pty) Ltd",
          "clientEmail": "charles@midtown.co.za",
          "invoiceAmount": 45600.0,
          "chargeRate": 300.0,
          "totalDuration": 152,
          "invoiceDate": "2023-08-25",
          "status": "DRAFT",
          "__typename": "SalesInvoiceHeader"
        },
        "lines": [
          {
            "lineNo": 1,
            "description": "Onboarding  rework",
            "duration": 42,
            "amount": 12600.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 2,
            "description": "Main App to handle auto login - previously done on the skin.",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 3,
            "description": "Beta Skin  - firebase deployment, https, beta API, nginx routing",
            "duration": 24,
            "amount": 7200.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 4,
            "description": "API changes for onboarding emails",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 5,
            "description": "File manager for skin files",
            "duration": 19,
            "amount": 5700.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 6,
            "description": "Angular upgrade (all 3 app) work with new version of Nodejs and bug fixes",
            "duration": 16,
            "amount": 4800.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 7,
            "description": "Update skin and API to allow fetching order list by OrgId - NEW endpint created",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 8,
            "description": "App theming - AG- Grid tyles override and bootstrap layout fixes",
            "duration": 16,
            "amount": 4800.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 9,
            "description": "Forgot Password",
            "duration": 3,
            "amount": 900.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 10,
            "description": "Docker deployment update upgrade - move to github",
            "duration": 18,
            "amount": 5400.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          },
          {
            "lineNo": 11,
            "description": "Main App bug fixes -  Order Lists Editing,Order Navigation , supplier/customer org additions",
            "duration": 4,
            "amount": 1200.0,
            "invoiceNumber": "73",
            "__typename": "SalesInvoiceLine"
          }
        ],
        "__typename": "SalesInvoice"
      }
    ]
  }
}


@Injectable({providedIn: 'root'})
export class InvoiceService{


  public fetchAllInvoice() : Observable<SalesInvoice[]>{
    return of(data.data.salesInvoices);
  }
}
