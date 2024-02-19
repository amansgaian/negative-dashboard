export const Response = [
    {
        "key": "createaccount",
        "name": "Holacracy_create_account",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/accounts",
        "requestBody": "{\n    \"accountHolderName\": \"QA_ACCOUNT\",\n    \"accountNum\": \"56_0b6437eb-70af-46d6-84fc-b344b9dbb190\",\n    \"accountType\": \"COMPANY\",\n    \"active\": true,\n    \"id\": \"78998458758\",\n    \"swiftCode\": \"string\"\n}",
        "responseBody": "{\"id\":\"78998458758\",\"accountHolderName\":\"QA_ACCOUNT\",\"accountNum\":\"56_0b6437eb-70af-46d6-84fc-b344b9dbb190\",\"accountType\":\"COMPANY\",\"swiftCode\":\"string\",\"active\":true}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:56:55 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "10"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:56:53.884+00:00",
        "endTime": "2023-10-19T09:56:56.769+00:00",
        "latency": 2885
    },
    {
        "key": "createorganisations",
        "name": "Holacracy_create_organisations",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/organisations",
        "requestBody": "{\n    \"accountId\": \"1525465\",\n    \"active\": true,\n    \"id\": \"22345678901\",\n    \"organisationName\": \"ORGANISATION_QA\",\n    \"registrationNumber\": \"ORGANISATION_QA\",\n    \"routingNum\": \"ORGANISATION_QA\",\n    \"website\": \"string\"\n}",
        "responseBody": "{\"timestamp\":1697709417738,\"origin\":\"market-place\",\"errorCode\":4046,\"errorMessage\":\"Account not found.\",\"cause\":{\"message\":\"Account not found.\",\"timestamp\":1697709417},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:56:57 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "5"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:56:56.796+00:00",
        "endTime": "2023-10-19T09:56:58.165+00:00",
        "latency": 1369
    },
    {
        "key": "usersignup",
        "name": "Holacracy_user_signup",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/iam-service/v1.0/tenants/signup",
        "requestBody": "{ \"email\": \"anil_4df872ac-d4a2-4d6d-a873-28b42659c186@gatestautomation.com\"}",
        "responseBody": "{\"msg\":\"Verify your email address. We just sent an OTP to your email address.\"}",
        "responseHeaders": [
            {
                "name": "access-control-allow-origin",
                "value": "*"
            },
            {
                "name": "access-control-allow-methods",
                "value": "POST, GET, OPTIONS, DELETE, PUT"
            },
            {
                "name": "access-control-max-age",
                "value": "3600"
            },
            {
                "name": "access-control-allow-headers",
                "value": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,Access-Control-Allow-Origin, X-Auth-Token"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:56:59 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "898"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 200,
        "statusDescription": "HTTP/1.1 200 OK",
        "startTime": "2023-10-19T09:56:58.196+00:00",
        "endTime": "2023-10-19T09:57:00.951+00:00",
        "latency": 2755
    },
    {
        "key": "otp",
        "name": "Holacracy_otp_creation",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/iam-service/v1.0/tenants/otp-verification",
        "requestBody": "{ \"email\": \"anil_bb4e83d7-3156-4323-aadd-3980dee4088b@gatestautomation.com\",\n \"otp\": 100000\n}",
        "responseBody": "{\"timestamp\":1697709422047,\"origin\":\"iam-service\",\"errorCode\":5001,\"status\":\"INTERNAL_SERVER_ERROR\"}",
        "responseHeaders": [
            {
                "name": "access-control-allow-origin",
                "value": "*"
            },
            {
                "name": "access-control-allow-methods",
                "value": "POST, GET, OPTIONS, DELETE, PUT"
            },
            {
                "name": "access-control-max-age",
                "value": "3600"
            },
            {
                "name": "access-control-allow-headers",
                "value": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,Access-Control-Allow-Origin, X-Auth-Token"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:01 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "10"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 500,
        "statusDescription": "HTTP/1.1 500 Internal Server Error",
        "startTime": "2023-10-19T09:57:00.956+00:00",
        "endTime": "2023-10-19T09:57:02.386+00:00",
        "latency": 1430
    },
    {
        "key": "create_tenant",
        "name": "Holacracy_CreateTenant",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/tenants",
        "requestBody": "{\n    \"id\": \"65117401bd3a870001901a09\",\n    \"countryCode\": \"+977\",\n    \"description\": \" Tenant\",\n    \"version\": \"v1.0\",\n    \"url\": \"www.google.com/images/avinash-patel-rockz\",\n    \"emailId\": \"gaian_admin@gatestautomation.com\",\n    \"organisationId\": \"651171bb81c9bf5766db6dec\",\n    \"geoLocation\": null,\n    \"dmas\": [],\n    \"selectedTags\": [],\n    \"telephoneNum\": \"6599723423\",\n    \"interestedProducts\": [],\n    \"address\": {\n        \"addressLine1\": \"\",\n        \"addressLine2\": \"\",\n        \"city\": \"\",\n        \"state\": \"\",\n        \"country\": \"\",\n        \"postCode\": \"\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"type\": \"PRIMARY\"\n    },\n    \"defaultCurrency\": \"INR\",\n    \"currenciesSupported\": [],\n    \"logo\": \"www.google.com/images.\",\n    \"userName\": \"mobile10@gatestautomation.com\",\n    \"firstName\": \"kafka\",\n    \"lastName\": \"zookeeper\",\n    \"name\": \"mobile10@gatestautomation.com\",\n    \"password\": \"Gaian@123\",\n    \"parentTenantId\": \"\",\n    \"product\": {\n        \"648ee3e37f271849193b2166\": [\n            \"MARKETPLACE_USER\"\n        ]\n    },\n    \"platformDetails\": {\n        \"6511745981c9bf5766db6ded\": [\n            \"AP\"\n        ]\n    }\n}",
        "responseBody": "{\"id\":\"65117401bd3a870001901a09\",\"countryCode\":\"+977\",\"description\":\" Tenant\",\"version\":\"v1.0\",\"url\":\"www.google.com/images/avinash-patel-rockz\",\"emailId\":\"gaian_admin@gatestautomation.com\",\"organisationId\":\"651171bb81c9bf5766db6dec\",\"createdTimeMs\":1697709423560,\"dmas\":[],\"selectedTags\":[],\"telephoneNum\":\"6599723423\",\"interestedProducts\":[],\"address\":{\"addressLine1\":\"\",\"addressLine2\":\"\",\"city\":\"\",\"state\":\"\",\"longitude\":0.0,\"latitude\":0.0,\"postCode\":\"\",\"country\":\"\",\"type\":\"PRIMARY\"},\"active\":true,\"defaultCurrency\":\"INR\",\"currenciesSupported\":[\"INR\"],\"logo\":\"www.google.com/images.\",\"userName\":\"mobile10@gatestautomation.com\",\"name\":\"Kafka Zookeeper\",\"firstName\":\"kafka\",\"lastName\":\"zookeeper\",\"password\":\"Gaian@123\",\"parentTenantId\":\"\",\"product\":{\"648ee3e37f271849193b2166\":[\"MARKETPLACE_USER\"]},\"platformsIds\":[\"6511745981c9bf5766db6ded\"],\"tags\":{},\"platformDetails\":{\"6511745981c9bf5766db6ded\":[\"AP\"]}}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:03 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "129"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:02.395+00:00",
        "endTime": "2023-10-19T09:57:04.542+00:00",
        "latency": 2147
    },
    {
        "key": "create_platform",
        "name": "Holacracy_create_platform",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/platforms ",
        "requestBody": "{\n    \"name\": \"Google\",\n    \"desc\": \"Google\",\n    \"icon\": \"https://www.google.com/\",\n    \"title\": \"Google\",\n    \"currencies\": [\n        \"INR\",\n        \"USD\"\n    ],\n    \"ownerId\": \"64c120cbad23b74288283431\",\n    \"config\": {},\n    \"serpLocation\": {},\n    \"parentPlatformId\": \"64c11637cb6ac451ea1b66a1\",\n    \"platformConfig\": {},\n    \"platformMasterConfig\": {\n        \"mission\": \"Google\",\n        \"vision\": \"\",\n        \"values\": [\n            \"Google\",\n            \"Google\"\n        ],\n        \"legalBusinessname\": \"Google\",\n        \"organisationLogo\": \"abc\",\n        \"businessregistrationNumber\": \"12345\",\n        \"businessAddress\": \"hyderabad\",\n        \"postalCode\": \"500035\",\n        \"city\": \"hyderabad\",\n        \"state\": \"tel\",\n        \"emailId\": \"@133\",\n        \"contactNumber\": \"45664653\",\n        \"cikKey\": \"545\",\n        \"crunchBaseUrl\": \"45646555\",\n        \"nationalBbbId\": \"4564565\",\n        \"regionalBbbId\": \"568765132\",\n        \"themeColourPrimary\": \"#FFFFF\",\n        \"themeColourSecondary\": \"#FFFFF\",\n        \"themeColourBackGround\": \"#FFFF\",\n        \"themeColourText\": \"#FFFF\",\n        \"themeIcons\": \"Flex Line\",\n        \"themeFontHeading\": \"Lato\",\n        \"themeFontBody\": \"Loto\",\n        \"allowPersonalisation\": true,\n        \"loginThemeColour\": \"#FFFF\",\n        \"loginImage\": \"https://media.licdn.com/dms/image/C510BAQGNxm-cQ3-WcA/company-logo_200_200/0/1569563107210?e=2147483647&v=beta&t=eVl9vEFsun42_l7ZPDS6BosDnK-XkdoeNG37K338lhY\",\n        \"errorThemeColour\": \"#FFFF\",\n        \"errorImage\": \"https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148072533.jpg\",\n        \"storeFrontThemeColour\": \"#FFFF\",\n        \"storeFrontImage\": \"abc\",\n        \"productThemeColour\": \"#FFFF\",\n        \"productImage\": \"abc\",\n        \"productListingType\": \"Compact\",\n        \"productListingBackground\": \"abc\",\n        \"allowNatureMarketPlace\": true,\n        \"NatureMarketPlaceType\": \"Traditional\",\n        \"allowMarketPlaceType\": true,\n        \"marketPlaceType\": \"Org Public\",\n        \"allowInvitesExpire\": true,\n        \"invitesExpire\": \"30Days\",\n        \"allowCommunicate\": true,\n        \"allowTenantToAdd\": true,\n        \"newParticipants\": [\n            \"XP only\",\n            \"More than 10 alliances\"\n        ],\n        \"allowTypeOfTenants\": true,\n        \"typeOfTenants\": [\n            \"All types\"\n        ],\n        \"requireCoolDown\": true,\n        \"coolDownPeriod\": \"1month\",\n        \"allowAllianceFormation\": true,\n        \"allianceOperatorApproval\": [\n            \"Always\",\n            \"Tenants <365days old\"\n        ],\n        \"requireApprovalExit\": true,\n        \"exitAlliance\": [\n            \"For ARR >300k USD\",\n            \"For ARR >100k USD\"\n        ],\n        \"dissolveAlliance\": \"Operator only\"\n    }\n}",
        "responseBody": "{\"timestamp\":1697709425883,\"origin\":\"market-place\",\"errorCode\":4004,\"errorMessage\":\"Tenant not available in the database.\",\"cause\":{\"message\":\"Tenant not available in the database.\",\"timestamp\":1697709425},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:05 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "5"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:57:04.561+00:00",
        "endTime": "2023-10-19T09:57:06.063+00:00",
        "latency": 1502
    },
    {
        "key": "create_product",
        "name": "Holacracy_create_product",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/products",
        "requestBody": "{ \"active\": true, \"activeSince\": 0, \"alliancedProduct\": \"string\", \"allowsMultiplePurchases\": true, \"aqNodes\": [ \"string\" ], \"attachedDocumentsUrls\": [ \"string\" ], \"baNodes\": [ \"string\" ], \"chartNodes\": [ \"string\" ], \"cloneId\": \"string\", \"config\": {}, \"contextNodes\": [ \"string\" ], \"createdBy\": \"string\", \"createdTimeMs\": 0, \"currency\": \"AED\", \"description\": \"string\", \"domain\": \"string\", \"engagementNodes\": [ \"string\" ], \"groupNodes\": [ \"string\" ], \"hostedApps\": [ \"string\" ], \"id\": \"string\", \"interestedTenants\": [ \"string\" ], \"listing\": \"PRIVATE\", \"logoUrl\": \"string\", \"mappingNode\": [ \"string\" ], \"masterConfig\": { \"additionalProp1\": { \"comment\": \"string\", \"link\": \"string\", \"type\": \"API\" }, \"additionalProp2\": { \"comment\": \"string\", \"link\": \"string\", \"type\": \"API\" }, \"additionalProp3\": { \"comment\": \"string\", \"link\": \"string\", \"type\": \"API\" } }, \"metaData\": {}, \"name\": \"string\", \"ownerId\": \"string\", \"parentPlatformId\": \"64e1fa1a38c9497c1fe8e27a\", \"participation\": \"BY_INVITATION\", \"plan\": { \"defaultRatecardId\": \"string\", \"rateCardIds\": { \"additionalProp1\": [ \"string\" ], \"additionalProp2\": [ \"string\" ], \"additionalProp3\": [ \"string\" ] } }, \"platformId\": \"64e1fa1a38c9497c1fe8e27a\", \"plpConfiguration\": { \"plpDetails\": [ { \"codeLength\": 0, \"codeRate\": 0, \"fftSize\": 0, \"plpName\": \"string\", \"qpsk\": 0 } ] }, \"primaryRateCard\": \"string\", \"productMasterConfigId\": \"string\", \"productOffering\": \"MARKETPLACE\", \"productRoles\": [ \"string\" ], \"productStatus\": \"APPROVED\", \"productTags\": [ \"ADVERTISING\" ], \"productType\": \"AP\", \"productUrl\": \"string\", \"properties\": {}, \"relatedInformation\": \"string\", \"salesCount\": 0, \"schemaNodes\": [ \"string\" ], \"servingAreas\": [ \"string\" ], \"snapshotsUrls\": [ \"string\" ], \"tags\": { \"additionalProp1\": \"string\", \"additionalProp2\": \"string\", \"additionalProp3\": \"string\" }, \"templateNodes\": [ \"string\" ], \"universeNodes\": [ \"string\" ], \"updatedTimeMs\": 0, \"vendorCommercials\": [ { \"active\": true, \"adFee\": { \"baseFee\": 0, \"description\": \"string\", \"feeLowerLimit\": 0, \"feeUpperLimit\": 0, \"fixedFee\": 0, \"multiplierField\": \"string\", \"negotiable\": true, \"queryId\": \"string\", \"type\": \"AD\", \"unit\": \"DAYS\", \"validityFrom\": 0, \"validityTo\": 0 }, \"adRevenueShare\": { \"baseShare\": 0, \"description\": \"string\", \"eligibleForRoyalty\": true, \"fixedShare\": 0, \"multiplierField\": \"string\", \"negotiable\": true, \"queryId\": \"string\", \"revenueShareType\": \"AD\", \"shareLowerLimit\": 0, \"shareUpperLimit\": 0 }, \"apiCountFee\": { \"baseFee\": 0, \"description\": \"string\", \"feeLowerLimit\": 0, \"feeUpperLimit\": 0, \"fixedFee\": 0, \"multiplierField\": \"string\", \"negotiable\": true, \"queryId\": \"string\", \"type\": \"AD\", \"unit\": \"DAYS\", \"validityFrom\": 0, \"validityTo\": 0 }, \"billingCycle\": 0, \"billingCycleUnit\": \"DAYS\", \"businessModel\": \"string\", \"businessPlan\": \"string\", \"comment\": \"string\", \"consumerRevenueShare\": { \"baseShare\": 0, \"description\": \"string\", \"eligibleForRoyalty\": true, \"fixedShare\": 0, \"multiplierField\": \"string\", \"negotiable\": true, \"queryId\": \"string\", \"revenueShareType\": \"AD\", \"shareLowerLimit\": 0, \"shareUpperLimit\": 0 }, \"contextId\": \"string\", \"createdAt\": \"2023-10-03T07:30:50.374Z\", \"createdBy\": \"string\", \"currency\": \"AED\", \"dataSharable\": true, \"deleted\": true, \"description\": \"string\", \"eligibleForRoyalty\": true, \"id\": \"string\", \"invitation\": \"BY_INVITATION\", \"name\": \"string\", \"paasFee\": { \"baseFee\": 0, \"description\": \"string\", \"feeLowerLimit\": 0, \"feeUpperLimit\": 0, \"fixedFee\": 0, \"multiplierField\": \"string\", \"negotiable\": true, \"queryId\": \"string\", \"type\": \"AD\", \"unit\": \"DAYS\", \"validityFrom\": 0, \"validityTo\": 0 }, \"rateCardStatus\": \"ALLIANCE_BROKEN\", \"requirements\": \"string\", \"saasFee\": { \"baseFee\": 0, \"description\": \"string\", \"feeLowerLimit\": 0, \"feeUpperLimit\": 0, \"fixedFee\": 0, \"multiplierField\": \"string\", \"negotiable\": true, \"queryId\": \"string\", \"type\": \"AD\", \"unit\": \"DAYS\", \"validityFrom\": 0, \"validityTo\": 0 }, \"userGroupIds\": [ \"string\" ], \"version\": \"string\", \"volCountFee\": { \"baseFee\": 0, \"description\": \"string\", \"feeLowerLimit\": 0, \"feeUpperLimit\": 0, \"fixedFee\": 0, \"multiplierField\": \"string\", \"negotiable\": true, \"queryId\": \"string\", \"type\": \"AD\", \"unit\": \"DAYS\", \"validityFrom\": 0, \"validityTo\": 0 } } ], \"vendorCount\": 0, \"version\": \"string\", \"videoUrls\": [ \"string\" ], \"videos\": [ { \"description\": \"string\", \"url\": \"string\" } ], \"visibility\": \"PRIVATE\", \"website\": \"string\", \"wfNodes\": [ \"string\" ]}",
        "responseBody": "{\"timestamp\":1697709426959,\"origin\":\"market-place\",\"errorCode\":5001,\"errorMessage\":\"Malformed JSON request : POST to /v1.0/products \",\"status\":\"BAD_REQUEST\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:06 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "1"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 400,
        "statusDescription": "HTTP/1.1 400 Bad Request",
        "startTime": "2023-10-19T09:57:06.073+00:00",
        "endTime": "2023-10-19T09:57:07.261+00:00",
        "latency": 1188
    },
    {
        "key": "create_ratecard",
        "name": "Holacracy_create_ratecard",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/rate-cards/product/64f1c028f7056c0b7c830e37",
        "requestBody": "{\n    \"name\": \"check_ratecard_v01\",\n    \"primaryRateCardId\": \"64c2762b0975f4693387bb965\",\n    \"version\": \"v1.0\",\n    \"platformId\": \"64f1be5bf7056c0b7c830e35\",\n    \"rateCardType\":\"PLATINUM\",\n    \"paasFee\": {\n        \"description\": \"\",\n        \"fixedFee\": 102.0,\n        \"type\": \"PAAS\",\n        \"queryId\": \"5555\",\n        \"multiplierField\": null,\n        \"baseFee\": \"0.0\",\n        \"validityFrom\": 1665413598.391000000,\n        \"validityTo\": 1731196800.000000000,\n        \"unit\": \"MONTHS\"\n    },\n    \"saasFee\": {\n        \"description\": \"\",\n        \"fixedFee\": 100.0,\n        \"type\": \"SAAS\",\n        \"queryId\": \"55555\",\n        \"multiplierField\": null,\n        \"baseFee\": \"0.0\",\n        \"validityFrom\": 1665413598.391000000,\n        \"validityTo\": 1731196800.000000000,\n        \"unit\": \"MONTHS\"\n    },\n    \"apiCountFee\": {\n        \"description\": \"\",\n        \"fixedFee\": 700.0,\n        \"type\": \"COUNT\",\n        \"queryId\": \"5555\",\n        \"multiplierField\": null,\n        \"baseFee\": \"70.0\",\n        \"validityFrom\": 1646765091.204000000,\n        \"validityTo\": 1646765091.204000000,\n        \"unit\": \"MINUTES\"\n    },\n    \"volCountFee\": {\n        \"description\": \"\",\n        \"fixedFee\": 900.0,\n        \"type\": \"VOLUME\",\n        \"queryId\": \"5555\",\n        \"multiplierField\": null,\n        \"baseFee\": \"90.0\",\n        \"validityFrom\": 1646765091.204000000,\n        \"validityTo\": 1646765091.204000000,\n        \"unit\": \"MINUTES\"\n    },\n    \"adFee\": {\n        \"description\": \"\",\n        \"fixedFee\": 800.0,\n        \"type\": \"AD\",\n        \"queryId\": \"5555\",\n        \"multiplierField\": null,\n        \"baseFee\": \"80.0\",\n        \"validityFrom\": 1646765091.204000000,\n        \"validityTo\": 1646765091.204000000,\n        \"unit\": \"MINUTES\"\n    },\n    \"adRevenueShare\": {\n        \"description\": \"\",\n        \"fixedShare\": 15.0,\n        \"revenueShareType\": \"AD\",\n        \"queryId\": \"55555\",\n        \"multiplierField\": null,\n        \"baseShare\": \"0.0\",\n        \"eligibleForRoyalty\": false\n    },\n    \"consumerRevenueShare\": {\n        \"description\": \"\",\n        \"fixedShare\": 0.0,\n        \"revenueShareType\": \"AD\",\n        \"queryId\": \"5555\",\n        \"multiplierField\": null,\n        \"baseShare\": \"0.0\",\n        \"eligibleForRoyalty\": false\n    },\n    \"dataSharable\": true,\n    \"currency\": \"INR\",\n    \"isActive\": true,\n    \"contextId\": \"5555\",\n    \"keywords\": [],\n    \"billingCycleUnit\": \"MINUTES\",\n    \"billingCycle\": \"2\",\n    \"eligibleForRoyalty\": true,\n    \"comment\": \"Comment Section.\",\n    \"defaultRateCard\": false\n}",
        "responseBody": "{\"timestamp\":1697709428195,\"origin\":\"market-place\",\"errorCode\":4004,\"errorMessage\":\"Product not available in the database.\",\"cause\":{\"message\":\"Product not available in the database.\",\"timestamp\":1697709428},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:08 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "7"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:57:07.268+00:00",
        "endTime": "2023-10-19T09:57:08.363+00:00",
        "latency": 1095
    },
    {
        "key": "create_alliance",
        "name": "Holacracy_create_alliance",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/alliances",
        "requestBody": "{ \"appId\": \"string\", \"buyerId\": \"string\", \"createdTimeMs\": 0, \"id\": \"string\", \"platformId\": \"64e1fa1a38c9497c1fe8e27a\", \"productId\": \"64e4f3d01d7ed164260b4096\", \"rateCardId\": \"string\", \"sellerId\": \"string\", \"status\": \"ALLIANCE_BROKEN\", \"updatedTimeMs\": 0}",
        "responseBody": "{\"timestamp\":1697709429287,\"origin\":\"market-place\",\"errorCode\":4004,\"errorMessage\":\"Rate Card not available in the database.\",\"cause\":{\"message\":\"Rate Card not available in the database.\",\"timestamp\":1697709429},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:09 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "9"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:57:08.368+00:00",
        "endTime": "2023-10-19T09:57:09.693+00:00",
        "latency": 1325
    },
    {
        "key": "universe",
        "name": "Tf-Web_create_universe",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/tf-web/v1.0/650d6b6d3dc39500017d13f3/universes",
        "requestBody": "{\n    \"description\": \"AnilTesting COE322\",\n    \"name\": \"test_beca3011-fb51-4c21-89fe-815e8bd4b099\",\n    \"universeReadAccess\": \"PUBLIC\",\n    \"universeWriteAccess\": \"PUBLIC\"\n}",
        "responseBody": "{\"id\":\"6530fd77cb45012d387327eb\",\"name\":\"test_beca3011-fb51-4c21-89fe-815e8bd4b099\",\"tenantId\":\"650d6b6d3dc39500017d13f3\",\"description\":\"AnilTesting COE322\",\"schemas\":[],\"groups\":[],\"contexts\":[],\"engagements\":[],\"aqs\":[],\"default\":false}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "origin,access-control-request-method,access-control-request-headers,accept-encoding"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "strict-transport-security",
                "value": "max-age=31536000 ; includeSubDomains"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-encoding",
                "value": "gzip"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:11 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "22"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:09.697+00:00",
        "endTime": "2023-10-19T09:57:12.268+00:00",
        "latency": 2571
    },
    {
        "key": "schema",
        "name": "Tf-Web_create_schema",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas",
        "requestBody": "{\n    \"entityName\": \"test1_6e331787-b5d7-4151-83ea-e8db88b47e8a\",\n    \"description\": \"test_move_entity_123\",\n    \"universes\": [\n        \"6523ff22eb55e9436de6c6a6\"\n    ],\n    \"attributes\": [\n        {\n            \"name\": \"network\",\n            \"type\": {\n                \"type\": \"string\"\n            },\n            \"required\": true\n        },\n        {\n            \"name\": \"callsign\",\n            \"type\": {\n                \"type\": \"string\"\n            },\n            \"required\": true\n        }\n    ],\n    \"primaryKey\": [\n        \"network\"\n    ]\n}",
        "responseBody": "{\"tenantID\":\"64e1fd3d1443eb00018cc231\",\"status\":\"success\",\"msg\":\"EntitySchema created\",\"schemaId\":\"6530fd7acb45012d387327ec\",\"entitySchema\":{\"name\":\"test1_6e331787-b5d7-4151-83ea-e8db88b47e8a\",\"primaryKey\":[\"network\"],\"draft\":false,\"universes\":[\"6523ff22eb55e9436de6c6a6\"],\"jsonSchema\":\"{\\\"title\\\":\\\"test1_6e331787-b5d7-4151-83ea-e8db88b47e8a\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"callsign\\\":{\\\"type\\\":\\\"string\\\"},\\\"network\\\":{\\\"type\\\":\\\"string\\\"}},\\\"required\\\":[\\\"callsign\\\",\\\"network\\\"]}\",\"pheonixStatus\":{\"tablePresent\":false,\"remark\":\"Table not yet created\"},\"postgreSqlStatus\":{\"tablePresent\":false,\"remark\":\"Table not yet created\"}}}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "origin,access-control-request-method,access-control-request-headers,accept-encoding"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "strict-transport-security",
                "value": "max-age=31536000 ; includeSubDomains"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-encoding",
                "value": "gzip"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:24 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "10057"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:12.274+00:00",
        "endTime": "2023-10-19T09:57:25.143+00:00",
        "latency": 12869
    },
    {
        "key": "group",
        "name": "Tf-Web_create_group",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/tf-web/v1.0/650d6b6d3dc39500017d13f3/groups",
        "requestBody": "{\n    \"name\": \"test1_e68c989b-fada-4393-a646-183db537f363\",\n    \"desc\": \"List of states with windspeed greater than 20\",\n    \"readAccess\": \"PUBLIC\",\n    \"schemaId\": \"652fb00638d73d11d4b1230c\",\n    \"definition\": {\n        \"rawQuery\": \"SELECT * FROM t_651e5e208c202a5ff5c3c66f_t t0\",\n        \"tables\": [\n            \"652fb00638d73d11d4b1230c\"\n        ]\n    },\n    \"universes\": [\n        \"652ec40138d73d11d4b1220b\"\n    ]\n}",
        "responseBody": "{\"offline\":false,\"unifiedQuery\":\"SELECT t_652fb00638d73d11d4b1230c_t.\\\"id\\\" FROM t_651e5e208c202a5ff5c3c66f_t t0\",\"dataReady\":false,\"status\":\"success\",\"msg\":\"Group Created\",\"id\":\"6530fd86cb45012d387327ed\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "origin,access-control-request-method,access-control-request-headers,accept-encoding"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "strict-transport-security",
                "value": "max-age=31536000 ; includeSubDomains"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-encoding",
                "value": "gzip"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:27 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "130"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:25.151+00:00",
        "endTime": "2023-10-19T09:57:27.523+00:00",
        "latency": 2372
    },
    {
        "key": "analyticsquery",
        "name": "Tf-Web_create_analyticsquery",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/tf-web/v1.0/650d6b6d3dc39500017d13f3/analytic-queries",
        "requestBody": "{\n    \"universes\": [\n        \"652ec40138d73d11d4b1220b\"\n    ],\n    \"name\": \"test1_7c378a2c-78f1-482f-98fb-ca3ad697c65d\",\n    \"desc\": \"test_0022\",\n    \"definition\": \"SELECT count(*) FROM t_652fb00638d73d11d4b1230c_t t0 \",\n    \"aqDefinitionRequest\": {\n        \"tables\": [\n            \"652fb00638d73d11d4b1230c\"\n            \n        ]\n    },\n    \"startTime\": \"2023-04-12T16:42:00.000Z\",\n    \"endTime\": \"2027-09-27T11:04:48.188Z\",\n    \"timeZone\": \"Asia/Kolkata\",\n    \"frequency\": \"0 0/5 * 1/1 * ? *\",\n    \"type\":\"ONE_TIME\"\n}",
        "responseBody": "{\"status\":\"SUCCESS\",\"msg\":\"query created\",\"id\":\"6530fd88cb45012d387327ee\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "origin,access-control-request-method,access-control-request-headers,accept-encoding"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "strict-transport-security",
                "value": "max-age=31536000 ; includeSubDomains"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-encoding",
                "value": "gzip"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:28 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "36"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:27.530+00:00",
        "endTime": "2023-10-19T09:57:29.480+00:00",
        "latency": 1950
    },
    {
        "key": "context",
        "name": "Tf-Web_create_context",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/tf-web/v1.0/650d6b6d3dc39500017d13f3/contexts",
        "requestBody": "{\n    \"universes\": [\n        \"652ec40138d73d11d4b1220b\"\n    ],\n    \"schemaId\": \"652fb00638d73d11d4b1230c\",\n   \"contextType\": \"SimpleContext\",\n    \"name\": \"testinganil1_fe573dc3-ba10-486c-aecc-36a8f571925c\",\n    \"desc\": \"Zodiac Meeting\",\n    \"triggers\": [\n        {\n            \"type\": \"relative\",\n            \"schemaId\": \"652fb00638d73d11d4b1230c\",\n            \"attributeName\": \"start_time\",\n            \"timezone\": \"UTC\",\n            \"operator\": \"minus\",\n            \"timePeriod\": 10,\n            \"unit\": \"MINUTES\"\n        }\n    ],\n    \"definition\": {\n        \"derivedAttrs\": {},\n        \"condition\": {\n            \"comboOp\": \"AND\",\n            \"conditionType\": \"ComboCondition\",\n            \"conditions\": []\n        },\n        \"aq\": {},\n        \"tables\": [\n            \"652fb00638d73d11d4b1230c\"\n        ]\n    }\n}",
        "responseBody": "{\"status\":\"success\",\"msg\":\"created\",\"id\":\"6530fd8bcb45012d387327ef\",\"createdBy\":\"650d6b6d3dc39500017d13f3\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "origin,access-control-request-method,access-control-request-headers,accept-encoding"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "strict-transport-security",
                "value": "max-age=31536000 ; includeSubDomains"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-encoding",
                "value": "gzip"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:31 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "49"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 200,
        "statusDescription": "HTTP/1.1 200 OK",
        "startTime": "2023-10-19T09:57:29.485+00:00",
        "endTime": "2023-10-19T09:57:31.907+00:00",
        "latency": 2422
    },
    {
        "key": "signup",
        "name": "\nIam_Signup",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/iam-service/v1.0/tenants/signup",
        "requestBody": "{\n    \"email\": \"anil_56bb6b9f-4166-47c9-8310-7e3f67076e57@gatestautomation.com\"\n}",
        "responseBody": "{\"msg\":\"Verify your email address. We just sent an OTP to your email address.\"}",
        "responseHeaders": [
            {
                "name": "access-control-allow-origin",
                "value": "*"
            },
            {
                "name": "access-control-allow-methods",
                "value": "POST, GET, OPTIONS, DELETE, PUT"
            },
            {
                "name": "access-control-max-age",
                "value": "3600"
            },
            {
                "name": "access-control-allow-headers",
                "value": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,Access-Control-Allow-Origin, X-Auth-Token"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:34 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "881"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 200,
        "statusDescription": "HTTP/1.1 200 OK",
        "startTime": "2023-10-19T09:57:31.910+00:00",
        "endTime": "2023-10-19T09:57:35.258+00:00",
        "latency": 3348
    },
    {
        "key": "otp",
        "name": "Iam_OTP",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/iam-service/v1.0/tenants/otp-verification",
        "requestBody": "{\n    \"email\": \"anil_5@gatestautomation.com\",\n    \"otp\": 100000\n}",
        "responseBody": "{\"timestamp\":1697709457397,\"origin\":\"iam-service\",\"errorCode\":5001,\"status\":\"INTERNAL_SERVER_ERROR\"}",
        "responseHeaders": [
            {
                "name": "access-control-allow-origin",
                "value": "*"
            },
            {
                "name": "access-control-allow-methods",
                "value": "POST, GET, OPTIONS, DELETE, PUT"
            },
            {
                "name": "access-control-max-age",
                "value": "3600"
            },
            {
                "name": "access-control-allow-headers",
                "value": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,Access-Control-Allow-Origin, X-Auth-Token"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:36 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 500,
        "statusDescription": "HTTP/1.1 500 Internal Server Error",
        "startTime": "2023-10-19T09:57:35.263+00:00",
        "endTime": "2023-10-19T09:57:38.301+00:00",
        "latency": 3038
    },
    {
        "key": "create_tenant",
        "name": "Iam_CreateTenant",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/market-place/v1.0/tenants",
        "requestBody": "{\n    \"id\": \"65117401bd3a870001901a09\",\n    \"countryCode\": \"+977\",\n    \"description\": \" Tenant\",\n    \"version\": \"v1.0\",\n    \"url\": \"www.google.com/images/avinash-patel-rockz\",\n    \"emailId\": \"gaian_admin@gatestautomation.com\",\n    \"organisationId\": \"651171bb81c9bf5766db6dec\",\n    \"geoLocation\": null,\n    \"dmas\": [],\n    \"selectedTags\": [],\n    \"telephoneNum\": \"6599723423\",\n    \"interestedProducts\": [],\n    \"address\": {\n        \"addressLine1\": \"\",\n        \"addressLine2\": \"\",\n        \"city\": \"\",\n        \"state\": \"\",\n        \"country\": \"\",\n        \"postCode\": \"\",\n        \"longitude\": 0,\n        \"latitude\": 0,\n        \"type\": \"PRIMARY\"\n    },\n    \"defaultCurrency\": \"INR\",\n    \"currenciesSupported\": [],\n    \"logo\": \"www.google.com/images.\",\n    \"userName\": \"mobile10@gatestautomation.com\",\n    \"firstName\": \"kafka\",\n    \"lastName\": \"zookeeper\",\n    \"name\": \"mobile10@gatestautomation.com\",\n    \"password\": \"Gaian@123\",\n    \"parentTenantId\": \"\",\n    \"product\": {\n        \"648ee3e37f271849193b2166\": [\n            \"MARKETPLACE_USER\"\n        ]\n    },\n    \"platformDetails\": {\n        \"6511745981c9bf5766db6ded\": [\n            \"AP\"\n        ]\n    }\n}",
        "responseBody": "{\"id\":\"65117401bd3a870001901a09\",\"countryCode\":\"+977\",\"description\":\" Tenant\",\"version\":\"v1.0\",\"url\":\"www.google.com/images/avinash-patel-rockz\",\"emailId\":\"gaian_admin@gatestautomation.com\",\"organisationId\":\"651171bb81c9bf5766db6dec\",\"createdTimeMs\":1697709460664,\"dmas\":[],\"selectedTags\":[],\"telephoneNum\":\"6599723423\",\"interestedProducts\":[],\"address\":{\"addressLine1\":\"\",\"addressLine2\":\"\",\"city\":\"\",\"state\":\"\",\"longitude\":0.0,\"latitude\":0.0,\"postCode\":\"\",\"country\":\"\",\"type\":\"PRIMARY\"},\"active\":true,\"defaultCurrency\":\"INR\",\"currenciesSupported\":[\"INR\"],\"logo\":\"www.google.com/images.\",\"userName\":\"mobile10@gatestautomation.com\",\"name\":\"Kafka Zookeeper\",\"firstName\":\"kafka\",\"lastName\":\"zookeeper\",\"password\":\"Gaian@123\",\"parentTenantId\":\"\",\"product\":{\"648ee3e37f271849193b2166\":[\"MARKETPLACE_USER\"]},\"platformsIds\":[\"6511745981c9bf5766db6ded\"],\"tags\":{},\"platformDetails\":{\"6511745981c9bf5766db6ded\":[\"AP\"]}}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:40 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "123"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:38.307+00:00",
        "endTime": "2023-10-19T09:57:41.150+00:00",
        "latency": 2843
    },
    {
        "key": "create_tenant user",
        "name": "Iam_Create Tenant-user",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/iam-service/v1.0/tenant-user",
        "requestBody": "{\n    \"email\": \"anil_qa12@gatestautomation.com\",\n    \"name\": \"Anil\",\n    \"address\": {\n        \"addressLine1\": \"Plot No, Suite 2, 3, 5, Amara Jyothi, 502B, Road Number 31, Jubilee Hills, Hyderabad, Telangana 500033\",\n        \"addressLine2\": \"JublieeHill, sector 25, Hydrabad, Telangana\",\n        \"city\": \"Hyderabad\",\n        \"state\": \"Telangana\",\n        \"postCode\": \"500033\",\n        \"country\": \"Paris\",\n        \"type\": \"permanent\"\n    },\n    \"profileUrl\": \"www.google.com/profileUrl\",\n    \"parentTenantId\": \"64f97a808cd79f29dbf0b261\",\n    \"product\": {\n        \"644d399ff406c8ddabfbab3d\": [\n            \"CONSUMER_FACEBOOK\"\n        ],\n        \"644d39b4f406c8ddabfbab3e\": [\n            \"CONSUMER_INSTAGRAM\"\n        ]\n    },\n    \"constructsAccessRole\": {\n        \"SCHEMA\": \"READ\",\n        \"GROUP\": \"READ_WRITE\"\n    }\n}",
        "responseBody": "{\"timestamp\":1697709463866,\"origin\":\"iam-service\",\"errorCode\":40420,\"errorMessage\":\"ParentTenant is not found.\",\"cause\":{\"message\":\"ParentTenant is not found.\",\"timestamp\":1697709463},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "access-control-allow-origin",
                "value": "*"
            },
            {
                "name": "access-control-allow-methods",
                "value": "POST, GET, OPTIONS, DELETE, PUT"
            },
            {
                "name": "access-control-max-age",
                "value": "3600"
            },
            {
                "name": "access-control-allow-headers",
                "value": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,Access-Control-Allow-Origin, X-Auth-Token"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:43 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "3"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:57:41.155+00:00",
        "endTime": "2023-10-19T09:57:44.364+00:00",
        "latency": 3209
    },
    {
        "key": "tenant_creation",
        "name": "Neo4j_tenantcreation",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/tenant",
        "requestBody": "{\n    \"description\": \"TESTER\",\n    \"name\": \"qa\",\n    \"tenantId\": \"QA_ce1b7740-d5b0-48c4-9912-5479d9424c42\"\n}",
        "responseBody": "{\"tenantId\":\"QA_ce1b7740-d5b0-48c4-9912-5479d9424c42\",\"msg\":\"Successfully created TenantNode\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:45 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "20"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:44.367+00:00",
        "endTime": "2023-10-19T09:57:45.859+00:00",
        "latency": 1492
    },
    {
        "key": "universecreation",
        "name": "Neo4j_universe_creation",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/universes",
        "requestBody": "{\n    \"description\": \"string\",\n    \"icon\": \"string\",\n    \"name\": \"universeId\",\n    \"tenantId\": \"QA_tenantId\",\n    \"universeId\": \"QAuniverse_f8a93989-f830-4463-aa9f-a6e8cadf25dc\"\n}",
        "responseBody": "{\"universeId\":\"QAuniverse_f8a93989-f830-4463-aa9f-a6e8cadf25dc\",\"name\":\"universeId\",\"msg\":\"Successfully Created the UniverseNode\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:47 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "76"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:45.861+00:00",
        "endTime": "2023-10-19T09:57:47.261+00:00",
        "latency": 1400
    },
    {
        "key": "schemacreation",
        "name": "Neo4j_schema_creation",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/schemas",
        "requestBody": "{\n    \"description\": \"string\",\n    \"name\": \"QA_schemaId\",\n    \"schemaId\": \"QAschema_96587dad-a511-40cf-91af-541a7ec83f98\",\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"scheamId\":\"QAschema_96587dad-a511-40cf-91af-541a7ec83f98\",\"name\":\"QA_schemaId\",\"msg\":\"Successfully created Schema\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:48 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "82"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:47.265+00:00",
        "endTime": "2023-10-19T09:57:48.822+00:00",
        "latency": 1557
    },
    {
        "key": "workflowcreation",
        "name": "Neo4j_workflow_creation",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/workflows",
        "requestBody": "{\n    \"description\": \"string\",\n    \"name\": \"QA_qa\",\n    \"schemaIds\": [\n        \"QA_tenantId\"\n    ],\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ],\n    \"workflowId\": \"QAworkflowb51d3023-be14-4f45-a725-759c676e9e68\"\n}",
        "responseBody": "{\"schemaIds\":[\"QA_tenantId\"],\"workflowId\":\"QAworkflowb51d3023-be14-4f45-a725-759c676e9e68\",\"msg\":\"Successfully created WorkflowIngestionNode\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:49 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "86"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:48.826+00:00",
        "endTime": "2023-10-19T09:57:50.232+00:00",
        "latency": 1406
    },
    {
        "key": "aqcreation",
        "name": "Neo4j_aq_creation",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/aqs",
        "requestBody": "{\n    \"aqId\": \"QAAQ_77792bd1-5e78-4af4-a132-ff48276f304d\",\n    \"description\": \"QA_tenantId\",\n    \"name\": \"QA_tenantId\",\n    \"schemaNodeIds\": [\n        \"QA_tenantId\"\n    ],\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"aqId\":\"QAAQ_77792bd1-5e78-4af4-a132-ff48276f304d\",\"msg\":\"Successfully created AQNode\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:51 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "87"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:50.234+00:00",
        "endTime": "2023-10-19T09:57:51.311+00:00",
        "latency": 1077
    },
    {
        "key": "groupcreationusingschema",
        "name": "Neo4j_group_creationusingschema",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/groups",
        "requestBody": "{\n   \n    \"description\": \"QA_qa\",\n    \"groupId\": \"QAGROUP_756b450b-1845-4d31-b65c-6bca1a445fca\",\n    \"name\": \"QA_NAME\",\n    \"schemaId\": [\n        \"QA_tenantId\"\n    ],\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"groupId\":\"QAGROUP_756b450b-1845-4d31-b65c-6bca1a445fca\",\"msg\":\"Successfully created groupNode\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:52 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "85"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:51.318+00:00",
        "endTime": "2023-10-19T09:57:52.524+00:00",
        "latency": 1206
    },
    {
        "key": "groupcreationAq",
        "name": "Neo4j_group_creationusingAq",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/groups",
        "requestBody": "{\n   \n    \"description\": \"QA_qa\",\n    \"groupId\": \"QAGROUP_976ca190-de2c-409a-ab60-aff3298246c8\",\n    \"name\": \"QA_NAME\",\n   \"aqId\": [\n        \"QA_qa\"\n    ],\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"groupId\":\"QAGROUP_976ca190-de2c-409a-ab60-aff3298246c8\",\"msg\":\"Successfully created groupNode\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:53 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "94"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:52.528+00:00",
        "endTime": "2023-10-19T09:57:53.765+00:00",
        "latency": 1237
    },
    {
        "key": "chratcreationusingGroup",
        "name": "Neo4j_chat_creationusingGroup\n",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/charts",
        "requestBody": "{\n    \n    \"chartId\": \"QAChart_eb58ae7d-b041-45fc-9152-0e651ae62531\",\n    \"description\": \"string\",\n    \"groupIds\": [\n        \"QA_groupId\"\n    ],\n    \"name\": \"QA_name\",\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"chartId\":\"QAChart_eb58ae7d-b041-45fc-9152-0e651ae62531\",\"name\":\"QA_name\",\"msg\":\"Successfully created chart\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:54 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "129"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:53.769+00:00",
        "endTime": "2023-10-19T09:57:55.039+00:00",
        "latency": 1270
    },
    {
        "key": "chratcreationusingAQ",
        "name": "Neo4j_chat_creationusingAq",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/charts",
        "requestBody": "{\n    \"aqIds\": [\n        \"QA_qa\"\n    ],\n    \"chartId\": \"QAChart_575bad74-b834-43e1-89d5-16b1ef58bf45\",\n    \"description\": \"string\",\n    \"name\": \"QA_name\",\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"chartId\":\"QAChart_575bad74-b834-43e1-89d5-16b1ef58bf45\",\"name\":\"QA_name\",\"msg\":\"Successfully created chart\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:55 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "91"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:55.043+00:00",
        "endTime": "2023-10-19T09:57:56.073+00:00",
        "latency": 1030
    },
    {
        "key": "bacreationusingAQ",
        "name": "Neo4j_BA_creationusingAq",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/bas",
        "requestBody": "{\n   \n    \"baId\": \"QABA_06b43b9f-3bf9-4559-8ea5-6803859e333d \",\n    \"description\": \"string\",\n    \"groupIds\": [\n        \"QA_groupId\"\n    ],\n    \"name\": \"QAba\",\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"baId\":\"QABA_06b43b9f-3bf9-4559-8ea5-6803859e333d \",\"name\":\"QAba\",\"msg\":\"Successfully created BA\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:56 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "118"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:56.075+00:00",
        "endTime": "2023-10-19T09:57:57.159+00:00",
        "latency": 1084
    },
    {
        "key": "bacreationusingGroup",
        "name": "Neo4j_BA_creationusingGroup",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/bas",
        "requestBody": "{\n    \"aqIds\": [\n        \"QA_qa\"\n    ],\n    \"baId\": \"QABA_5f71fb35-17f4-41e0-b3ea-cf4a3c58888b \",\n    \"description\": \"string\",\n\n    \"name\": \"QAba\",\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"baId\":\"QABA_5f71fb35-17f4-41e0-b3ea-cf4a3c58888b \",\"name\":\"QAba\",\"msg\":\"Successfully created BA\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:58 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "96"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:57.162+00:00",
        "endTime": "2023-10-19T09:57:58.361+00:00",
        "latency": 1199
    },
    {
        "key": "enagementcreation",
        "name": "Neo4j_enagement_creation",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/neo4j-service/v1.0/engagements",
        "requestBody": "{\n    \"aqIds\": [\n        \"QA_qa\"\n    ],\n    \"contextId\": \"QA_contextId\",\n    \"description\": \"string\",\n    \"engagementId\": \"QAengagementIda5c9ff76-3944-476a-9911-06dcb7cb006d\",\n    \"groupIds\": [\n        \"QA_groupId\"\n    ],\n    \"name\": \"templateId\",\n    \"templateIds\": [\n        \"QA_templateId\"\n    ],\n    \"tenantId\": \"QA_tenantId\",\n    \"universeNodeIds\": [\n        \"QA_universeId\"\n    ]\n}",
        "responseBody": "{\"engagementId\":\"QAengagementIda5c9ff76-3944-476a-9911-06dcb7cb006d\",\"name\":\"templateId\",\"msg\":\"Successfully created Engagement Node\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:57:59 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "108"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:58.365+00:00",
        "endTime": "2023-10-19T09:57:59.553+00:00",
        "latency": 1188
    },
    {
        "key": "monet_plugin",
        "name": "monet_plugin",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/650421a8b45bc300019df4d6/plugin",
        "requestBody": "{\n    \"name\": \"Plugins_Component Demo\",\n    \"description\": \"Plugin_Component Description\"\n}",
        "responseBody": "{\"createdTimeMs\":1697709480320,\"updatedTimeMs\":1697709480320,\"id\":\"6530fda83d36a839505e0685\",\"name\":\"Plugins_Component Demo\",\"description\":\"Plugin_Component Description\",\"dependencies\":[],\"global_traits\":[],\"components\":[],\"ownerId\":\"650421a8b45bc300019df4d6\",\"deleted\":false}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:00 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:57:59.558+00:00",
        "endTime": "2023-10-19T09:58:00.616+00:00",
        "latency": 1058
    },
    {
        "key": "monet_dependency",
        "name": "monet_dependency",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/dependency/plugin",
        "requestBody": "{\n    \"src\": \"Local Source\",\n    \"type\": \"Api Call\",\n    \"crossorigin\": \"Not required\",\n    \"pluginId\": \"650426891d578e15dbb933e5\"\n}",
        "responseBody": "{\"timestamp\":1697709481411,\"origin\":\"XPB_Framework\",\"errorCode\":4044,\"errorMessage\":\"Plugin not found.\",\"cause\":{\"message\":\"Plugin not found.\",\"timestamp\":1697709481},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:01 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:58:00.620+00:00",
        "endTime": "2023-10-19T09:58:01.587+00:00",
        "latency": 967
    },
    {
        "key": "monet_trait using plugin",
        "name": "monet_trait using plugin",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/iam-service/v1.0/tenant-user/xpb-framework/v1.0/trait/plugin",
        "requestBody": "{ \"type\": \"Trait Type\", \"label\": \"Red Label\", \"name\": \"Trait\", \"parent\": \"Parent Trait\", \"value\": \"Trait Value\", \"traitValues\": { \"x\": \"y\" }, \"options\": [ { \"option\": \"Options Trait\" } ], \"values\": \"Trait Values\", \"changeProp\": 1, \"dynamic\": true, \"pluginId\": \"650426891d578e15dbb933e5\"}",
        "responseBody": "{\"timestamp\":1697709482351,\"status\":404,\"error\":\"Not Found\",\"message\":\"No message available\",\"path\":\"/v1.0/tenant-user/xpb-framework/v1.0/trait/plugin\"}",
        "responseHeaders": [
            {
                "name": "access-control-allow-origin",
                "value": "*"
            },
            {
                "name": "access-control-allow-methods",
                "value": "POST, GET, OPTIONS, DELETE, PUT"
            },
            {
                "name": "access-control-max-age",
                "value": "3600"
            },
            {
                "name": "access-control-allow-headers",
                "value": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,Access-Control-Allow-Origin, X-Auth-Token"
            },
            {
                "name": "x-content-type-options",
                "value": "nosniff"
            },
            {
                "name": "x-xss-protection",
                "value": "1; mode=block"
            },
            {
                "name": "cache-control",
                "value": "no-cache, no-store, max-age=0, must-revalidate"
            },
            {
                "name": "pragma",
                "value": "no-cache"
            },
            {
                "name": "expires",
                "value": "0"
            },
            {
                "name": "x-frame-options",
                "value": "DENY"
            },
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:01 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "3"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:58:01.592+00:00",
        "endTime": "2023-10-19T09:58:02.525+00:00",
        "latency": 933
    },
    {
        "key": "monet_component using plugin",
        "name": "monet_component using plugin",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/650421a8b45bc300019df4d6/component",
        "requestBody": "{\n    \"name\": \"Testing Delete API For Error 1\",\n    \"pluginId\": \"650426891d578e15dbb933e5\",\n    \"content\": \"<div class='file_input'></div>\",\n    \"className\": \"file_input\",\n    \"stylable\": [\n        \"width\",\n        \"height\"\n    ],\n    \"unstylable\": [\n        \"font-family\",\n        \"font-size\"\n    ],\n    \"scriptProps\": [\n        \"title\",\n        \"placeholder\",\n        \"required\",\n        \"name\"\n    ],\n    \"dataModel\": {\n        \"placeholder\": \"inline\",\n        \"title\": \"Select Date \",\n        \"required\": true,\n        \"name\": \"dateTime\"\n    },\n    \"script\": \"const canvasElement=document.getElementById(this.id),details=arguments[0];render=e=>{console.log('Render'),ele=<div class='ui form'><div class='required field'><label class='title'>User Input</label><input class='type' type='file' name='date local'></div></div>,canvasElement.innerHTML=ele,title(e),required(e),addName(e)},title=e=>{console.log('title'),optionsContainer=canvasElement.getElementsByClassName('title')[0],e.title?optionsContainer.innerHTML=e.title:optionsContainer.style.display='none'},required=e=>{console.log('required'),optionsContainer=canvasElement.getElementsByClassName('field')[0],e.required?optionsContainer.classList.add('required'):optionsContainer.classList.remove('required')},addPlaceholder=e=>{console.log('addPlaceholder');var l=canvasElement.getElementsByClassName('type')[0];e.placeholder&&l.setAttribute('placeholder',e.placeholder)},addName=e=>{console.log('addPlaceholder');var l=canvasElement.getElementsByClassName('type')[0];e.placeholder&&l.setAttribute('name',e.name)};render(details);\"\n}",
        "responseBody": "{\"timestamp\":1697709484368,\"origin\":\"XPB_Framework\",\"errorCode\":4044,\"errorMessage\":\"Plugin not found.\",\"cause\":{\"message\":\"Plugin not found.\",\"timestamp\":1697709484},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:04 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "102"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:58:02.530+00:00",
        "endTime": "2023-10-19T09:58:04.548+00:00",
        "latency": 2018
    },
    {
        "key": "monet_block using component",
        "name": "monet_block using component",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/block",
        "requestBody": "{\n    \"componentId\": \"65042b391d578e15dbb93458\",\n    \"label\": \"Red Label\",\n    \"icon\": \"Icon\",\n    \"category\": \"Categroy\",\n    \"active\": true\n}",
        "responseBody": "{\"timestamp\":1697709485626,\"origin\":\"XPB_Framework\",\"errorCode\":4045,\"errorMessage\":\"Component not found.\",\"cause\":{\"message\":\"Component not found.\",\"timestamp\":1697709485},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:05 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:58:04.550+00:00",
        "endTime": "2023-10-19T09:58:05.841+00:00",
        "latency": 1291
    },
    {
        "key": "monet_trait using plugin",
        "name": "monet_trait using plugin",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/trait/plugin",
        "requestBody": "{ \"type\": \"Trait Type\", \"label\": \"Red Label\", \"name\": \"Trait\", \"parent\": \"Parent Trait\", \"value\": \"Trait Value\", \"traitValues\": { \"x\": \"y\" }, \"options\": [ { \"option\": \"Options Trait\" } ], \"values\": \"Trait Values\", \"changeProp\": 1, \"dynamic\": true, \"pluginId\": \"650426891d578e15dbb933e5\"}",
        "responseBody": "{\"timestamp\":1697709486706,\"origin\":\"XPB_Framework\",\"errorCode\":4044,\"errorMessage\":\"Plugin not found.\",\"cause\":{\"message\":\"Plugin not found.\",\"timestamp\":1697709486},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:06 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:58:05.845+00:00",
        "endTime": "2023-10-19T09:58:06.919+00:00",
        "latency": 1074
    },
    {
        "key": "monet_dependency using component",
        "name": "monet_dependency using component",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/dependency/component",
        "requestBody": "{\n    \"src\": \"Local Source\",\n    \"type\": \"Api Call\",\n    \"crossorigin\": \"Not required\",\n    \"componentId\": \"65042b391d578e15dbb93458\"\n}",
        "responseBody": "{\"timestamp\":1697709487861,\"origin\":\"XPB_Framework\",\"errorCode\":4045,\"errorMessage\":\"Component not found.\",\"cause\":{\"message\":\"Component not found.\",\"timestamp\":1697709487},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:07 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:58:06.923+00:00",
        "endTime": "2023-10-19T09:58:08.047+00:00",
        "latency": 1124
    },
    {
        "key": "monet_trait using component",
        "name": "monet_trait using component",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/trait/component",
        "requestBody": "{\n    \"type\": \"Trait Type\",\n    \"label\": \"Red Label\",\n    \"name\": \"Trait\",\n    \"parent\": \"Parent Trait\",\n    \"value\": \"Trait Value\",\n    \"options\": [\n        {\n            \"option\": \"Options Trait\"\n        }\n    ],\n    \"values\": \"Trait Values\",\n    \"changeProp\": 2,\n    \"dynamic\": false,\n    \"componentId\": \"65042b391d578e15dbb93458\"\n}",
        "responseBody": "{\"timestamp\":1697709488857,\"origin\":\"XPB_Framework\",\"errorCode\":4045,\"errorMessage\":\"Component not found.\",\"cause\":{\"message\":\"Component not found.\",\"timestamp\":1697709488},\"status\":\"NOT_FOUND\"}",
        "responseHeaders": [
            {
                "name": "vary",
                "value": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:07 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 404,
        "statusDescription": "HTTP/1.1 404 Not Found",
        "startTime": "2023-10-19T09:58:08.050+00:00",
        "endTime": "2023-10-19T09:58:09.038+00:00",
        "latency": 988
    },
    {
        "key": "monet_event",
        "name": "monet_event",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/xpb-framework/v1.0/event",
        "requestBody": "{ \"eventType\": \"Event Types\", \"trigger\": \"Trigger\"}",
        "responseBody": "{\"createdTimeMs\":1697709489784,\"updatedTimeMs\":1697709489784,\"id\":\"6530fdb13d36a839505e0686\",\"eventType\":\"Event Types\",\"trigger\":\"Trigger\"}",
        "responseHeaders": [
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:09 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:58:09.042+00:00",
        "endTime": "2023-10-19T09:58:09.985+00:00",
        "latency": 943
    },
    {
        "key": "create_config",
        "name": "Engagement-web_create_config",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/engagements-web/v1.0/651bb849ec160d000163b757/configs",
        "requestBody": "{\n    \"data\": {\n        \"additionalProp1\": \"string\",\n        \"additionalProp2\": \"string\",\n        \"additionalProp3\": \"string\"\n    },\n    \"engagementType\": \"SMS\",\n    \"providerId\": \"string\"\n}",
        "responseBody": "{\"id\":\"b95c21cb-7aec-41e0-b890-ad8b176efa7f\",\"providerId\":\"string\",\"tenantId\":\"651bb849ec160d000163b757\",\"engagementType\":\"SMS\",\"config\":{\"additionalProp1\":\"string\",\"additionalProp3\":\"string\",\"additionalProp2\":\"string\"},\"createdOn\":\"2023-10-19T09:58:10.716\",\"updatedOn\":\"2023-10-19T09:58:10.716\"}",
        "responseHeaders": [
            {
                "name": "x-mb-trace-id",
                "value": "51ca570eb87a69b861778926a2e2c91f"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:10 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "12"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 200,
        "statusDescription": "HTTP/1.1 200 OK",
        "startTime": "2023-10-19T09:58:09.989+00:00",
        "endTime": "2023-10-19T09:58:10.913+00:00",
        "latency": 924
    },
    {
        "key": "create_engagement",
        "name": "Engagement-web_create_engagement",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/engagements-web/v1.0/651bb849ec160d000163b757/engagements",
        "requestBody": "{\n    \"name\": \"Hit Calendar Workflow072\",\n    \"trigger\": {\n        \"triggerType\": \"ONETIME\"\n    },\n    \"destination\": {\n        \"type\": \"GROUP\",\n        \"id\": \"641964c342e25600014607fb\",\n        \"iteration\": {\n            \"type\": \"PER_ROW\"\n        },\n        \"filters\": [\n            {\n                \"type\": \"STATIC\",\n                \"attribute\": \"id\",\n                \"value\": \"125\"\n            }\n        ]\n    }, \"source\": {\n        \"type\": \"GROUP\",\n        \"id\": \"641964c342e25600014607fb\",\n        \"iteration\": {\n            \"type\": \"PER_ROW\"\n        },\n        \"filters\": [\n            {\n                \"type\": \"STATIC\",\n                \"attribute\": \"id\",\n                \"value\": \"125\"\n            }\n        ]\n    },\n    \"channel\": {\n        \"channelType\": \"API\",\n        \"urlType\": \"\",\n        \"url\": \"http://workflowdesigner.gaiansolutions.com/api/wf/6385a7d566bbfc00010ced87/execute/7141\",\n        \"httpMethod\": \"POST\",\n        \"headers\": {\n            \"Content-Type\": [\n                \"multipart/form-data\"\n            ]\n        },\n        \"pathParams\": {},\n        \"queryParams\": {},\n        \"body\": {\n            \"templateId\": \"63905ac49827990008ea0887\",\n            \"source\": \"jsonPath:Source\",\n            \"env\": \"TEST\",\n            \"tenantId\": \"651bb849ec160d000163b757\"\n        },\n        \"dataSources\": [\n            {\n                \"key\": \"Source\",\n                \"value\": \"SOURCE\"\n            }\n        ]\n    }\n}",
        "responseBody": "{\"timestamp\":\"2023-10-19T15:28:11.720+0530\",\"status\":400,\"error\":\"Bad Request\",\"errors\":[{\"codes\":[\"NotEmpty.engagementCreationRequest.groupIds\",\"NotEmpty.groupIds\",\"NotEmpty.java.util.Set\",\"NotEmpty\"],\"arguments\":[{\"codes\":[\"engagementCreationRequest.groupIds\",\"groupIds\"],\"arguments\":null,\"defaultMessage\":\"groupIds\",\"code\":\"groupIds\"}],\"defaultMessage\":\"GroupIds must not be null or empty\",\"objectName\":\"engagementCreationRequest\",\"field\":\"groupIds\",\"rejectedValue\":null,\"bindingFailure\":false,\"code\":\"NotEmpty\"},{\"codes\":[\"NotEmpty.engagementCreationRequest.universes\",\"NotEmpty.universes\",\"NotEmpty.java.util.Set\",\"NotEmpty\"],\"arguments\":[{\"codes\":[\"engagementCreationRequest.universes\",\"universes\"],\"arguments\":null,\"defaultMessage\":\"universes\",\"code\":\"universes\"}],\"defaultMessage\":\"Universes must not be null or empty\",\"objectName\":\"engagementCreationRequest\",\"field\":\"universes\",\"rejectedValue\":null,\"bindingFailure\":false,\"code\":\"NotEmpty\"}],\"message\":\"Validation failed for object='engagementCreationRequest'. Error count: 2\",\"path\":\"/v1.0/651bb849ec160d000163b757/engagements\"}",
        "responseHeaders": [
            {
                "name": "x-mb-trace-id",
                "value": "b1e0cd5f143c29126964ba74044cda3f"
            },
            {
                "name": "content-type",
                "value": "application/json"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:11 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "4"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 400,
        "statusDescription": "HTTP/1.1 400 Bad Request",
        "startTime": "2023-10-19T09:58:10.920+00:00",
        "endTime": "2023-10-19T09:58:11.902+00:00",
        "latency": 982
    },
    {
        "key": "create_wallet",
        "name": "Payment_create-wallet",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/payment-service/v1.0/wallets/create",
        "requestBody": "{\n    \"cardId\": \"1\",\n    \"name\": \"Piyush Miaa\",\n    \"mobile\": \"8277199478\",\n    \"email\": \"string\",\n    \"currency\": \"INR\",\n    \"walletBalance\": 100,\n    \"walletType\": \"TENANT\",\n    \"customerCreateRequest\": {\n        \"address\": {\n            \"addressLine1\": \"10880 Malibu Point, 90265\",\n            \"addressLine2\": \"10880 Malibu Point, 90265\",\n            \"city\": \"Malibu\",\n            \"state\": \"Malibu\",\n            \"country\": \"US\",\n            \"postCode\": \"90265\",\n            \"longitude\": 102.02,\n            \"latitude\": 10.2,\n            \"type\": \"PRIMARY\"\n        }\n    }\n}",
        "responseBody": "{\"timestamp\":1697709492734,\"status\":400,\"error\":\"Bad Request\",\"errors\":[{\"codes\":[\"Pattern.createWalletRequest.email\",\"Pattern.email\",\"Pattern.java.lang.String\",\"Pattern\"],\"arguments\":[{\"codes\":[\"createWalletRequest.email\",\"email\"],\"arguments\":null,\"defaultMessage\":\"email\",\"code\":\"email\"},[],{\"arguments\":null,\"codes\":[\"^[_A-Za-z0-9-\\\\+]+(\\\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\\\.[A-Za-z0-9]+)*(\\\\.[A-Za-z]{2,})$\"],\"defaultMessage\":\"^[_A-Za-z0-9-\\\\+]+(\\\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\\\.[A-Za-z0-9]+)*(\\\\.[A-Za-z]{2,})$\"}],\"defaultMessage\":\"must match \\\"^[_A-Za-z0-9-\\\\+]+(\\\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\\\.[A-Za-z0-9]+)*(\\\\.[A-Za-z]{2,})$\\\"\",\"objectName\":\"createWalletRequest\",\"field\":\"email\",\"rejectedValue\":\"string\",\"bindingFailure\":false,\"code\":\"Pattern\"},{\"codes\":[\"Email.createWalletRequest.email\",\"Email.email\",\"Email.java.lang.String\",\"Email\"],\"arguments\":[{\"codes\":[\"createWalletRequest.email\",\"email\"],\"arguments\":null,\"defaultMessage\":\"email\",\"code\":\"email\"},[],{\"arguments\":null,\"codes\":[\".*\"],\"defaultMessage\":\".*\"}],\"defaultMessage\":\"must be a well-formed email address\",\"objectName\":\"createWalletRequest\",\"field\":\"email\",\"rejectedValue\":\"string\",\"bindingFailure\":false,\"code\":\"Email\"}],\"message\":\"Validation failed for object='createWalletRequest'. Error count: 2\",\"path\":\"/v1.0/wallets/create\"}",
        "responseHeaders": [
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:12 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "2"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 400,
        "statusDescription": "HTTP/1.1 400 Bad Request",
        "startTime": "2023-10-19T09:58:11.906+00:00",
        "endTime": "2023-10-19T09:58:12.936+00:00",
        "latency": 1030
    },
    {
        "key": "bank_to_wallet",
        "name": "Payment_bank-to-transfer",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/payment-service/v1.0/wallets/seller6185939%40gatestautomation.com/credit?fromBank=false",
        "requestBody": "{\n    \"clientRedirectUrl\": \"https://www.google.com/\",\n    \"paymentType\": \"Credit Card(Master)\",\n    \"gatewayName\": \"AUTHORIZENET\",\n    \"clientId\": \"Adwize002\",\n    \"totalAmount\": 2000,\n    \"transactionType\":\"WALLET\",\n    \"currency\":\"INR\"\n}",
        "responseBody": "{\"timestamp\":1697709493865,\"status\":500,\"error\":\"Internal Server Error\",\"message\":\"Wallet not found.\",\"path\":\"/v1.0/wallets/seller6185939%2540gatestautomation.com/credit\"}",
        "responseHeaders": [
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:13 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "7"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 500,
        "statusDescription": "HTTP/1.1 500 Internal Server Error",
        "startTime": "2023-10-19T09:58:12.940+00:00",
        "endTime": "2023-10-19T09:58:14.057+00:00",
        "latency": 1117
    },
    {
        "key": "transfer_money",
        "name": "Payment_transfer-money",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/payment-service/v1.0/wallets/debit/from-sender/to-receiver",
        "requestBody": "{ \"amount\": \"200\", \"currency\": \"INR\", \"fromUserId\": \"seller6185939%40gatestautomation.com\", \"toUserId\": \"seller7185939@gatestautomation.com\"}",
        "responseBody": "{\"timestamp\":1697709494893,\"status\":500,\"error\":\"Internal Server Error\",\"message\":\"Wallet not found.\",\"path\":\"/v1.0/wallets/debit/from-sender/to-receiver\"}",
        "responseHeaders": [
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:14 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "10"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 500,
        "statusDescription": "HTTP/1.1 500 Internal Server Error",
        "startTime": "2023-10-19T09:58:14.060+00:00",
        "endTime": "2023-10-19T09:58:15.117+00:00",
        "latency": 1057
    },
    {
        "key": "create Template",
        "name": "Template_create Template",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/template-service/v1.0/65117401bd3a870001901a09/65117401bd3a870001901a09/templates",
        "requestBody": "{ \"groupIds\": [], \"name\": \"Tokenization Service 01\", \"defaultData\": {}, \"template\": \"<!DOCTYPE html><html> <head></head> <body><h1>Hi avinash</h1></body></html>\", \"tags\": [ \"email\", \"gmail\", \"hotmail\" ], \"thumbnail\": \"5ce6b93d-6446-4507-a9b9-b731491c779e\"}",
        "responseBody": "{\"id\":\"6530fdb8fe624d0009411ef5\",\"tenantId\":\"65117401bd3a870001901a09\",\"subTenantId\":\"65117401bd3a870001901a09\",\"template\":\"<!DOCTYPE html><html> <head></head> <body><h1>Hi avinash</h1></body></html>\",\"defaultData\":{\"data\":[]},\"sampleData\":{},\"status\":true,\"deleted\":false,\"createdTimeMs\":1697709496160,\"updatedTimeMs\":1697709496156,\"name\":\"Tokenization Service 01\",\"tags\":[\"gmail\",\"hotmail\",\"email\"],\"thumbnail\":\"5ce6b93d-6446-4507-a9b9-b731491c779e\",\"transactionId\":\"42f79b04-2563-42ab-bfe6-532d2508b5bc\",\"userId\":\"12345\",\"universes\":[],\"groupIds\":[],\"aqIds\":[],\"templateReadAccess\":\"PRIVATE\",\"templateWriteAccess\":\"PRIVATE\",\"visibility\":\"PUBLIC\",\"additionalProperties\":{}}",
        "responseHeaders": [
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:16 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "147"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 201,
        "statusDescription": "HTTP/1.1 201 Created",
        "startTime": "2023-10-19T09:58:15.118+00:00",
        "endTime": "2023-10-19T09:58:16.491+00:00",
        "latency": 1373
    },
    {
        "key": "process template using post fIlter using data",
        "name": "Template_process template using post fIlter using data",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/template-service/v2.0/65117401bd3a870001901a09/65117401bd3a870001901a09/templates/6516600629bf0c0009033bc6",
        "requestBody": "{\n    \"data\": [\n        {\n            \"source\": {\n                \"entities\": [\n                    {\n                        \"userId\": \"61122e89d4b8bd000105947c\",\n                        \"emailId\": \"keshav.naidu@gaiansolutions.com\",\n                        \"deviceId\": \"B8:87:6E:42:44:68\",\n                        \"fcmToken\": \"dcILQ9AWTtuQ7rhMJ0_By_:APA91bH8OTtYHHYHPCqAMg62IlO3HlL4P563bmP60NXEwep7BS3x3RWTKro7j7f8sbaLfi7kIeOtSkmXbW0wKy1Ik7-cJ1nUAzXRP_VSgT9bdahnEkRxGVTKO7sZpc9EE3dGgYERO9vE\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"keshav.naidu@gaiansolutions.com\",\n                        \"_EPOCH\": 1678942340101\n                    },\n                    {\n                        \"userId\": \"6320211b524fc000017e6aa7\",\n                        \"emailId\": \"wkar.office\",\n                        \"deviceId\": \"B8:4D:43:D2:03:26\",\n                        \"fcmToken\": \"dhBUCkjwQC-DQkmpGxmAnd\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"wkar.office\",\n                        \"_EPOCH\": 1678733622191\n                    },\n {\n                        \"userId\": \"614c0d2bea65dc0001cb5301\",\n                        \"emailId\": \"mudilishivakumar88@gmail.com\",\n                        \"deviceId\": \"02:00:00:00:00:00\",\n                        \"fcmToken\": \"dcSSBl3QSCOdijsqlRhUTW:APA91bFau81HsVm8DvfOnC32-Dh6q_I3wofFgMo49u4w8xkg4T-3QPfJKQ_XyABbpkrlXWJ7NroROQ4g83BgIQle255HhSPpCZ7DE9-6JzJYa20j_lfA8yHmGqjbO8YlSTRAfWMgNSKP\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"mudilishivakumar88@gmail.com\",\n                        \"_EPOCH\": 1678209357039\n                    },\n                    {\n                        \"userId\": \"613230afbeb9190001323fa2\",\n                        \"emailId\": \"prasannakumar.nalam@gaiansolutions.com\",\n                        \"deviceId\": \"B8:87:6E:42:44:06\",\n                        \"fcmToken\": \"c_dOglDXRJeWwmfcrXvfBE:APA91bEXzXVUlDcOVWVL1bh1T_XW5G9MYu9jA-X7R_mqLeZrNahE6R_hY50jZy33RZVT0nRHISKKvN_DU3FgLCHUrMqoMGPbCVbnwzAmkLqaefnPeXhfIm3hfv4533XqrYVUNYp_xxjC\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"prasannakumar.nalam@gaiansolutions.com\",\n                        \"_EPOCH\": 1677477409954\n                    },\n                    {\n                        \"userId\": \"627a0ea92c50de0001987f00\",\n                        \"emailId\": \"gg@gaiansolutions.com\",\n                        \"deviceId\": \"D4:8A:3B:28:EE:8F\",\n                        \"fcmToken\": \"\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"gg@gaiansolutions.com\",\n                        \"_EPOCH\": 1677246164388\n                    },\n            \n                    {\n                        \"userId\": \"627a0ea92c50de0001987e06\",\n                        \"emailId\": \"DURGA20@gaiansolutions.com\",\n                        \"deviceId\": \"DURGA20\",\n                        \"fcmToken\": \"\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"DURGA20@gaiansolutions.com\",\n                        \"_EPOCH\": 1677142413579\n                    },\n                    {\n                        \"userId\": \"627a0ea92c50de0001987e00\",\n                        \"emailId\": \"DURGA18@gaiansolutions.com\",\n                        \"deviceId\": \"DURGA18\",\n                        \"fcmToken\": \"\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"DURGA18@gaiansolutions.com\",\n                        \"_EPOCH\": 1677137470844\n                    },\n                    }\n                ]\n            }\n        }\n    ],\n    \"dataUrls\": null\n}\n                   ",
        "responseBody": "{\"timestamp\":1697709497414,\"origin\":\"template-service\",\"errorCode\":5001,\"errorMessage\":\"Malformed JSON request : POST to /v2.0/65117401bd3a870001901a09/65117401bd3a870001901a09/templates/6516600629bf0c0009033bc6 \",\"status\":\"BAD_REQUEST\"}",
        "responseHeaders": [
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:17 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "3"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 400,
        "statusDescription": "HTTP/1.1 400 Bad Request",
        "startTime": "2023-10-19T09:58:16.495+00:00",
        "endTime": "2023-10-19T09:58:17.644+00:00",
        "latency": 1149
    },
    {
        "key": "process template using post fIlter using dataurl",
        "name": "Template_process template using post fIlter using dataurl",
        "httpMethod": "POST",
        "url": "https://ig.aidtaas.com/template-service/v2.0/65117401bd3a870001901a09/65117401bd3a870001901a09/templates/651509e112fb8300091e1e9d",
        "requestBody": "data\": [\n        {\n            \"source\": {\n                \"entities\": [\n                    {\n                        \"userId\": \"61122e89d4b8bd000105947c\",\n                        \"emailId\": \"keshav.naidu@gaiansolutions.com\",\n                        \"deviceId\": \"B8:87:6E:42:44:68\",\n                        \"fcmToken\": \"dcILQ9AWTtuQ7rhMJ0_By_:APA91bH8OTtYHHYHPCqAMg62IlO3HlL4P563bmP60NXEwep7BS3x3RWTKro7j7f8sbaLfi7kIeOtSkmXbW0wKy1Ik7-cJ1nUAzXRP_VSgT9bdahnEkRxGVTKO7sZpc9EE3dGgYERO9vE\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"keshav.naidu@gaiansolutions.com\",\n                        \"_EPOCH\": 1678942340101\n                    },\n                    {\n                        \"userId\": \"6320211b524fc000017e6aa7\",\n                        \"emailId\": \"wkar.office\",\n                        \"deviceId\": \"B8:4D:43:D2:03:26\",\n                        \"fcmToken\": \"dhBUCkjwQC-DQkmpGxmAnd\",\n                        \"osType\": \"Android\",\n                        \"_id\": \"wkar.office\",\n                        \"_EPOCH\": 1678733622191\n                    },\n                   \n",
        "responseBody": "{\"timestamp\":1697709498504,\"origin\":\"template-service\",\"errorCode\":5001,\"errorMessage\":\"Malformed JSON request : POST to /v2.0/65117401bd3a870001901a09/65117401bd3a870001901a09/templates/651509e112fb8300091e1e9d \",\"status\":\"BAD_REQUEST\"}",
        "responseHeaders": [
            {
                "name": "content-type",
                "value": "application/json;charset=UTF-8"
            },
            {
                "name": "date",
                "value": "Thu, 19 Oct 2023 09:58:18 GMT"
            },
            {
                "name": "x-envoy-upstream-service-time",
                "value": "3"
            },
            {
                "name": "server",
                "value": "istio-envoy"
            },
            {
                "name": "transfer-encoding",
                "value": "chunked"
            }
        ],
        "statusCode": 400,
        "statusDescription": "HTTP/1.1 400 Bad Request",
        "startTime": "2023-10-19T09:58:17.649+00:00",
        "endTime": "2023-10-19T09:58:18.736+00:00",
        "latency": 1087
    }
]