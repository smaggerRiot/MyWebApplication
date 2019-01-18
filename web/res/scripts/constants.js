var Constants = new function()
{

    this.IOPERATOR_EQUALTO = 0;
    this.IOPERATOR_NOTEQUALTO = 1;
    this.IOPERATOR_LESSTHAN = 2;
    this.IOPERATOR_GREATERTHAN = 3;
    this.IOPERATOR_LESSTHANOREQUALTO = 4;
    this.IOPERATOR_GREATERTHANOREQUALTO = 5;
    this.IOPERATOR_CONTAINING = 6;
    this.IOPERATOR_NOTCONTAINING = 7;
    this.IOPERATOR_ISBLANK = 8;
    this.IOPERATOR_ISNOTBLANK = 9;
    this.IOPERATOR_BEGINSWITH = 10;
    this.IOPERATOR_DOESNOTBEGINSWITH = 11;
    this.IOPERATOR_MATCHPATTERN = 12;
    this.IOPERATOR_DOESNOTMATCHPATTERN = 13;
    this.IOPERATOR_VALUECHNAGES = 20;

    this.IOPERATOR_EQUALSANY = 14;
    this.IOPERATOR_EQUALSALL = 15;
    this.IOPERATOR_BETWEEN= 16;
    this.UNIQUEBY=17;

    this.IOPERATOR_WITH= 18;
    this.IOPERATOR_WITHOUT= 19;
    this.IOPERATOR_VALUECHANGE= 20;
    this.IOPERATOR_SLABBYDAY= 21; //SlabByDay
    this.IOPERATOR_SLABBYMONTH= 22;
    this.IOPERATOR_SLABBYQUARTER= 23;
    this.IOPERATOR_SLABBYFISCALQUARTER= 24;
    this.IOPERATOR_SLABBYYEAR= 25;



    this.DATATYPE_TEXT = 0;
    this.DATATYPE_NUMBER = 1;
    this.DATATYPE_BOOLEAN = 2;
    this.DATATYPE_DATETIME = 3;
    this.DATATYPE_DATE = 4;
    this.DATATYPE_TIME = 5;
    this.DATATYPE_FRACTION = 6;
    this.DATATYPE_PICTURE = 7;
    this.DATATYPE_STRINGLIST = 8;
    this.DATATYPE_NUMBERLIST = 9;
    this.DATATYPE_DOCVIEWER = 10;
    this.DATATYPE_UPDATEDTIME = 11;
    this.DATATYPE_MASTER = 12;
    this.DATATYPE_BIGNUMBER = 13;
    this.DATATYPE_EXT_TABLE = 14;
    /*this.DATATYPE_EMAIL = 101;
     this.DATATYPE_PHONE = 102;*/


    //Control Type
    this.CONTROLTYPE_TXTBOX = 0;
    this.CONTROLTYPE_SPINCTRL = 1;
    this.CONTROLTYPE_COMBOBOX = 2;
    this.CONTROLTYPE_RADIOBUTTON = 3;
    this.CONTROLTYPE_OPTIONCTRL = 4;
    this.CONTROLTYPE_DATEPICKER = 5;
    this.CONTROLTYPE_TIMEPICKER = 6;
    this.CONTROLTYPE_DOCUMENTCTRL = 7;
    this.CONTROLTYPE_PICTUREBOX = 8;
    this.CONTROLTYPE_CHECKBOX = 9;
    this.CONTROLTYPE_SLIDERCTRL = 10;
    this.CONTROLTYPE_COMPOSITE_FLD = 11;
    this.CONTROLTYPE_PHONE = 12;
    this.CONTROLTYPE_EMAIL = 13;
    this.CONTROLTYPE_WEBSITE = 14;
    this.CONTROLTYPE_COLOR_PICKER = 15;
    this.CONTROLTYPE_BUTTON = 16;
    this.CONTROLTYPE_APPROVAL_STATUS= 51;
    this.CONTROLTYPE_MULTI_SELECT = 52;
    this.CONTROLTYPE_RADIO_WITH_IMAGE = 56;
    this.CONTROLTYPE_DURATION = 57;
    this.CONTROLTYPE_SIGNATURE = 58;
    this.CONTROLTYPE_TIMER = 59;

    //Display Type
    this.DISPLAYTYPE_NONE = 0;
    this.DISPLAYTYPE_READONLY = 1;
    this.DISPLAYTYPE_INFOFIELD = 2;
    this.DISPLAYTYPE_HIDDEN = 3;
    this.DISPLAYTYPE_HIDDENINGRP = 4;
    this.DISPLAYTYPE_HIDDENINLEAF = 5;
    this.DISPLAYTYPE_MANDATORY = 6;
    this.DISPLAYTYPE_MANDATORYINGRP = 7;
    this.DISPLAYTYPE_MANDATORYINLEAF = 8;


    //Field Properties
    this.PROP_AUDITTRIAL = 0;
    this.PROP_COPYFROMPARENT = 1;
    this.PROP_CANNOTEXPORT = 2;
    this.PROP_CANNOTIMPORT = 3;
    this.PROP_INCLINQUICKCREATE = 4;
    this.PROP_NOTAVAILFORREPORTS = 5;
    this.PROP_MERGEFIELD = 6;
    this.PROP_MASSUPDATABLE = 7;
    this.PROP_SPELLCHECK = 8;

    //Behaviour
    this.BEHAVIOUR_NONE = 0;
    this.BEHAVIOUR_PASSWORD = 1;
    this.BEHAVIOUR_SELECTION = 2;
    this.BEHAVIOUR_AUTOCOMPLETE = 3;
    this.BEHAVIOUR_MULTILINE = 4;
    this.BEHAVIOUR_INCREMENTAL = 5;

    //Charecter Casing
    this.CHARCASING_NONE = 0;
    this.CHARCASING_UPPER = 1;
    this.CHARCASING_LOWER = 2;
    this.CHARCASING_PROPERSENTENCE = 3;

    //Text Alignment
    this.TEXTALIGN_LEFT = 0;
    this.TEXTALIGN_RIGHT = 1;
    this.TEXTALIGN_CENTER = 2;

    // Position of the image,....
    this.POSITION_TOP = 0;
    this.POSITION_BOTTOM = 1;
    this.POSITION_BOTH = 2;

    this.SORTBY_NAME = 0;
    this.SORTBY_DATATYPE = 1;
    this.SORTBY_GROUP = 2;

    this.CHANGEVAL_NONE = 0;
    this.CHANGEVAL_VALUE = 1;
    this.CHANGEVAL_FIELD = 2;
    this.CHANGEVAL_FORMULA = 3;

    this.RULES_DISP_NONE = 0;
    this.RULES_DISP_MANDATORY = 1;
    this.RULES_DISP_HIDDEN = 2;
    this.RULES_DISP_DISABLE = 3;
    this.RULES_DISP_HIDEGROUP = 4;
    this.RULES_DISP_DISABLE_GROUP = 5;

    this.MSGTYPE_INFO = 0;
    this.MSGTYPE_WARNANDPROCEED = 1;
    this.MSGTYPE_WARNANDRESTRICT = 2;





    //rules
    /*this.APPLYON_ONEDIT = 0;
     this.APPLYON_BEFORESAVE = 1;
     this.APPLYON_BEFOREDELETE = 2;

     this.APPLYON_ONLEAVE = 3;*/

    this.APPLYON_CREATEGROUPS = 0;
    this.APPLYON_LOAD = 1;
    this.APPLYON_NEWRECORD = 2;
    this.APPLYON_ONEDIT = 3;
    this.APPLYON_BEFORESAVE = 4;
    this.APPLYON_BEFOREDELETE = 5;
    this.APPLYON_ONENTER = 6;
    this.APPLYON_ONLEAVE = 7;

    this.COMPARE_WITH_VALUE = 1;//old=0
    this.COMPARE_WITH_FIELD = 2;//old=1
    this.COMPARE_WITH_FORMULA = 3;//old=2
    this.COMPARE_WITH_TEXT = 4;//old=3

    this.CONJUNCTION_ONLY = 0;
    this.CONJUNCTION_OR = 2;//old=1
    this.CONJUNCTION_AND = 1;//old=2
    this.CONJUNCTION_LIKE = 10; // used in the query builder ex:lookup window

    //    this.COMPARE_WITH_VALUE = 0;
    //    this.COMPARE_WITH_FIELD = 1;
    //    this.COMPARE_WITH_FORMULA = 2;

    //    this.COMPARE_WITH_TEXT = 3;
    //
    //    this.CONJUNCTION_ONLY = 0;
    //    this.CONJUNCTION_OR = 1;
    //    this.CONJUNCTION_AND = 2;
    //    this.CONJUNCTION_LIKE = 10; // used in the query builder ex:lookup window

    this.ALERTTYPE_SMS = 0;
    this.ALERTTYPE_EMAIL = 1;
    this.ALERTTYPE_DASHBOARD = 2;
    this.ALERTTYPE_POPUP = 3;
    this.ALERTTYPE_GTALK = 4;

    this.TYPE_USER = 0;
    this.TYPE_ROLE = 1;
    this.TYPE_TEAM= 2;
    this.TYPE_HIERARCHY =3;
    this.TYPE_LOGGEDINUSER=4;
    this.TYPE_LEVEL =5;
    this.TYPE_QUEUES=6;
    this.TYPE_ALL_USERS=7;
    this.TYPE_PROFILE=8;// used in addprofilerights method
    this.TYPE_CONTACT=9; // customer from contacts, requests, ect  ( added for showing notifications for customer)


    //Horizetanl alignment
    this.HOR_ALIGN_LEFT = 0;
    this.HOR_ALIGN_RIGHT = 1;
    this.HOR_ALIGN_CENTER = 2;

    //Vertical alignment
    this.VER_ALIGN_TOP = 0;
    this.VER_ALIGN_BOTTOM = 1;
    this.VER_ALIGN_CENTER = 2;

    //Sign
    this.SIGN_NONE = 0;
    this.SIGN_DR = 1;
    this.SIGN_PLUS_MINUS = 2;

    //calendar
    this.SUNDAY = 0;
    this.MONDAY = 1;
    this.TUESDAY = 2;
    this.WEDNESDAY = 3;
    this.THURSDAY = 4;
    this.FRIDAY = 5;
    this.SATURDAY = 6;



    this.JANUARY = 1;
    this.FEBRUARY = 2;
    this.MARCH = 3;
    this.APRIL = 4;
    this.MAY = 5;
    this.JUNE = 6;
    this.JULY = 7;
    this.AUGUST = 8;
    this.SEPTEMBER = 9;
    this.OCTOBER = 10;
    this.NOVEMBER = 11;
    this.DECEMBER = 12;

    this.FIRST = 0;
    this.SECOND = 1;
    this.THIRD = 2;
    this.FOURTH = 3;
    this.LAST = 4;


    this.DAY = 0;
    this.WEEK = 1;
    this.MONTH = 2;
    this.YEAR = 3;
    this.MINUTES = 4;
    this.HOURS = 5;

    this.IMKT_MINUTES = 1;
    this.IMKT_HOURS = 2;
    this.IMKT_DAYS = 3;
    this.IMKT_WEEKS = 4;
    this.IMKT_MONTHS= 5;
    this.IMKT_YEARS = 9


    this.ENDAFTER = 0;
    this.ENDBY = 1;
    this.NEVRENDING = 2;

    this.ON_DAY = 0;
    this.THE = 1;

    this.RETURN_DUPLICATE_CALENDAR = -1;
    this.RETURN_DUPLICATE_SHIFTNAME = -2;
    this.RETURN_DUPLICATE_HOLIDAY = -3;
    this.RETURN_DUPLICATE_EXCEPTION = -4;
    this.RETURN_DUPLICATE_WORKWEEK = -5;

    this.IMPORT_MODULETYPE_NEW = 0;

    this.IMPORT_TYPE_TXT = 1;
    this.IMPORT_FILE_CSV = 2;
    this.IMPORT_FILE_VCF = 3;
    this.IMPORT_FILE_EXCEL = 4;
    this.IMPORT_FILE_DBF = 5;
    this.IMPORT_FILE_TABSEPERATED = 6;
    this.IMPORT_FILE_CUSTOMDELIMITED = 7;

    this.IMPORT_FILEFORMAT_NONE = 1;
    this.IMPORT_FILEFORMAT_DOUBLEQUOTE = 2;
    this.IMPORT_FILEFORMAT_SINGLEQUOTE = 3;
    this.IMPORT_FILEFORMAT_OTHER = 4;

    this.IMPORT_DUPREC_UPDATE = 1;
    this.IMPORT_DUPREC_SKIP = 2;
    this.IMPORT_DUPREC_CLONE = 3;

    this.IMPORT_NEWREC_INSERT = 1;
    this.IMPORT_NEWREC_SKIP = 2;

    this.UTF8 = 1;
    this.ISO = 2;
    this.UTF16 = 3;

    this.INR = 1;
    this.DOLLAR = 2;
    this.AUSDOLLAR = 3;
    this.EURO = 4;
    this.POUND = 5;
    this.YEN = 6;

    this.DDMMYYYY = 0;/// as 20/2/YYYY
    this.MMDDYYYY = 1;/// as 02/20/YYYY
    this.YYYYMMDD = 2;// as  YYYY/02/20

    this.DD_MM_YYYY = 3;/// as 20-2-YYYY
    this.MM_DD_YYYY = 4;// as 02-20-YYYY
    this.YYYY_MM_DD = 5;//as YYYY-02-20

    this.DD___MM___YYYY = 6;// as 0705YYYY
    this.MM___DD___YYYY = 7;// as 0507YYYY
    this.YYYY___MM___DD = 8;// as YYYY0705

    this.DDMMYY = 9;/// as 20/2/YY
    this.MMDDYY = 10;/// as 02/20/YY
    this.YYMMDD = 11;/// as YY/02/12

    this.DD_MM_YY = 12;/// as 20-02-07
    this.MM_DD_YY = 13;/// as 02-20-07
    this.YY_MM_DD = 14;/// as 07-02-17

    this.DD___MM___YY = 15; // as 070522
    this.MM___DD___YY = 16; // as 220507
    this.YY___MM___DD = 17; // as 220507

    this.DD____MM____YYYY = 18;/// as 07\05\YYYY
    this.MM____DD____YYYY = 19;/// as 02\20\YYYY
    this.YYYY____MM____DD = 20;/// as YYYY\02\20

    this.DD____MM____YY = 21; /// as 07\05\yy
    this.MM____DD____YY = 22; /// as 05\07\yy
    this.YY____MM____DD = 23; /// as yy\07\05

    this.DDMONYYYY = 24; /// as 20/jun/YYYY
    this.DDMONYY = 25; /// as 20/jun/07

    this.DD_MON_YYYY = 26;/// as 20-jun-YYYY
    this.DD_MON_YY = 27;/// as 20-jun-07

    this.DD___MON___YYYY = 28; /// as 20junYYYY
    this.DD___MON___YY = 29; /// as 20jun07

    this.DD__MON__YYYY = 30;/// as 20 jun YYYY
    this.DD__MON__YY = 31;/// as 20 jun 07

    this.MON__DD__YYYY__TIME_HHMMAMPM = 51;/// as Oct 13, 2011 11:59 AM,

    /*this.DDMMYYYY = 0;/// as 20/2/YYYY
     this.MMDDYYYY = 1;/// as 02/20/YYYY
     this.YYYYMMDD = 2;// as  YYYY/02/20
     this.DDMMYY = 3;/// as 20/2/YYYY
     this.DD_MM_YYYY = 4;/// as 20-2-YYYY
     this.DD_MM_YY = 5;/// as 20-2-07
     this.DDMONYYYY = 6; /// as 20junYYYY
     this.DDMONYY = 7; /// as 20jun07
     this.DD__MON__YYYY = 8;/// as 20 jun YYYY
     this.DD__MON__YY = 9;/// as 20 jun 07

     this.MM_DD_YYYY = 10;// as 02-20-YYYY
     this.YYYY_MM_DD = 11;//as YYYY-02-20
     this.DD___MM___YYYY = 12;//0705YYYY
     this.DD___MM___YY = 13; //070507
     this.MMDDYY = 14;/// as 02/20/07
     this.DD____MM____YYYY = 15;//07\05\YYYY
     this.DD____MM____YY = 16; //07\05\yy
     this.MM____DD____YYYY = 17; //02\20\YYYY
     this.DD_MON_YY = 18;/// as 20-jun-07
     this.DD_MON_YYYY = 19;/// as 20-jun-YYYY*/

    this.HHMM = 1; //TODO: remove
    this.HHMMAMPM = 2;//TODO: remove

    this.TIME_HHMM = 1;
    this.TIME_HHMMAMPM = 2;
    this.TIME_HHMMSS = 3;
    this.TIME_HHMMSSAMPM = 4;

    this.LINEISTIME = 1;
    this.PHOENIXISTIME = 2;
    this.TONGATIME = 3;
    this.CHATHAMSTANDARDTIME = 4;
    this.PETROPAVLOVSKKAMCHATSKISUMMERTIME = 5;
    this.NEWZEALANDSTANDARDTIME = 6;
    this.FIJITIME = 7;
    this.NORFOLKTIME = 8;
    this.SOLOMONISTIME = 9;

    // SECURITY RELATED CONSTANTS
    this.ACCESS_PRIVATE = 1;
    this.ACCESS_PARENT = 2;
    this.ACCESS_PUBLIC_READONLY = 3;
    this.ACCESS_PUBLIC_READWRITE = 4;
    this.ACCESS_PUBLIC_READWRITETRANSFER = 5;
    this.ACCESS_PUBLIC_FULL = 6;
    this.PROFILE_MODULE = 1;
    this.PROFILE_RELATEDMODULE = 2;
    //for all users
    this.TEAM_ALLUSERS = 0;
    this.TEAM_ALLTEAMS = 1;
    // SECURITY ACTIONS(PRFILE AND ROLES)
    this.ACTION_FULL = 1;
    this.ACTION_READ = 2;
    this.ACTION_CREATE = 3;
    this.ACTION_WRITE = 4;
    this.ACTION_MODIFY = 5;
    this.ACTION_DELETE = 6;
    this.ACTION_SHARE = 7;
    this.ACTION_TRANSFER = 8;
    this.ACTION_APPEND = 9;
    this.ACTION_HIDE = 10;

    //profiles field
    this.ACTION_GLOBALSHARING = 0;//
    this.ACTION_PROFILE = 1;
    this.ACTION_ROLE = 2;
    this.ACTION_RELATEDMODULE = 3;
    this.ACTION_FIELDS = 4;
    //profiles field
    // SECURITY ACTIONS(PRFILE AND ROLES)
    // SECURITY RELATED CONSTANTS

    //Standard fields
    this.STANDARADFLD = 1;
    this.USERDEFINEDFLD = 0;

    //Table type
    this.TABLETYPE_HEADER = 0;
    this.TABLETYPE_BODY = 1;

    //AssignmentRule
    this.SCOPE_PUBLIC = 0;
    this.SCOPE_PRIVATE = 1;

    this.ALLOC_MANUAL = 1;
    this.ALLOC_AUTO = 2;

    this.ROUND_ROBIN = 1;
    this.LOAD_BASED = 2;
    this.PERCENT_BASED = 3;

    /*
     this.TYPE_USER = 1;
     this.TYPE_TEAM = 2;
     this.TYPE_ROLE = 3;
     */
    this.SHIPMENT_BOOKING=2460;  //// todo Need to delete
    this.MSTR_USER = 2564;
    //    this.MSTR_ROLES = 54; /// Commented by Koti
    this.MSTR_ROLES = 2568;
    this.MODULE_FIELDS = 152;
    this.MSTR_TEAMS = 2569;
    this.MSTR_HIERARCHYLEVELS = 2069;

    //// Work flow popup menu related
    this.PERIODIC = 4;
    this.EMAIL = 1;
    this.SMS = 2;
    this.TASK = 3;
    this.UPDATEFIELD = 4;
    this.EXMODULE = 5;
    this.ALERT = 6;
    this.NEWRECORD = 7;
    this.FOLLOWUP = 8;
    this.SHARING = 9;
    this.LINKMODULE = 10;

    this.MODULE_EXTERNAL_TABLE = 154;

    //Trans modules
    this.TRANS_MODULE = 255;
    this.LEADS = 256;
    this.TELELEADS = 257;
    this.TASKS = 512;
    this.APPOINTMENTS = 768;
    this.ACTIVITIES = 1536;
    this.OPPORTUNITIES = 1792;
    this.LISTMASTER = 2048;
    this.OPPORTUNITY_STATUS = 2056;

    this.COMMUNICATION = 12800;

    //Master modules
    this.MASTER_MODULE = 2304;
    this.ACCOUNTS = 2305;
    this.PRODUCTS = 2306;
    this.CONTACTS = 2309;
    this.CAMPAIGNS = 2310;
    this.COUNTRIES = 2317;
    this.SERVICES = 2324;
    this.SOLUTIONS=9984;


    //Internal modules
    this.INTERNAL_MODULES = 2560;
    this.EMAILS = 2562;
    this.DOCUMENTS = 2563;
    this.CURRENCY_MODULE = 2565; //added by yugandhar. added '_MODULE' since there is another variable already defined with the name cuurency
    this.TEMPLATES = 2567;
    this.CLOSED_ACTIVITIES = 2570;
    this.OPEN_ACTIVITIES = 2572;
    this.SALES_STAGES = 2574;
    this.CAMPAIGN_MEMBERS = 2576;
    this.DASHBOARD = 2581;
    this.NOTES = 2584;
    this.MESSAGES = 2585;
    this.HOME = 2589;
    this.ALLACTIVITIES=2590;
    this.CALLTEMPLATES=2595;
    this.CALL_NOTES=2596;
    this.CALL_STATUS=2601;
    this.ATTACHMENTS=2602;
    this.ANNOUNCEMENT = 2611;
    this.CONTACT_ROLES = 2612;
    this.REMINDERS=2613;
    this.SURVEY_MODULE=2615;
    this.CUST_SPARE_PARTS=2621;
    this.LOCATION_TRACKER=2617;
    this.TRACKER=2586;

    //Trans modules 2
    this.QUOTE=2816;
    this.SALES_ORDER=3072;
    this.CONTRACTS=3328;
    this.CUST_ASSETS=3584;
    this.REQUEST=3840;
    this.CALL_CLOSE=4096;
    this.CALL_WORKLOG=4352;
    this.PARTS_REPLACED=4608;
    this.PARTS_REQUESTED=4864;
    this.CALL_TASKS=5120;
    this.CALL_RESOLUTION=5376;
    this.INCIDENTS=5632;
    this.CALL_REOPEN=5888;
    this.REVENUE=6144;
    this.SUSPECTS=6400;
    this.PMS_ENQUIRY=6912;
    this.PMS_CONTRACTS=7168;

    this.ESTIMATION=8704;
    this.SERVICE_QUOTE=8192;
    this.SERVICE_ORDER=8448;
    this.PROBLEMS=9472;
    this.CHANGES=9728;
    this.SOLUTIONS=9984;
    this.WON_COMPETITOR=10240;
    this.LOST_COMPETITOR=10496;

    this.CMS_BOOKING=11008;
    this.CMS_CHECKER=11264;
    this.CMS_MANIFEST=11520;
    this.CMS_DISPATCH=11776;
    this.CMS_ARRIVALS=12032;
    this.CMS_INVESTIGATION=12288;
    this.CMS_DELIVERIES=12544;

    this.EDU_ENQUIRY = 13824;
    this.EDU_APPLICATION = 14080;
    this.EDU_INVOICE_TEMPLATE = 14592;
    this.EDU_PROFORMA_INVOICE = 14848;
    this.EDU_INVOICE = 15104;
    this.EDU_RECEIPT = 15360;
    this.EDU_REGISTER=13568;
    this.EDU_STUDENT=14336;

    this.Attach_Type_File = 1;
    this.Attach_Type_Url = 2;
    //// Work flow popup menu related

    this.IMPORTED_TELE_PROSPECTS_TO_TELE_EXEC = 1;
    this.TELE_MKT_CONV_LEADS_TO_MKT_EXEC = 2;
    this.WEB_LEADS_TO_MKT_EXEC = 3;
    this.WEB_LEADS_TO_TELE_MKT_EXEC = 4;
    this.SUPPORT_CASES_TO_SUPPORT_EXEC = 5;
    this.SUPPORT_EMAILS_TO_SUPPORT_EXEC = 6;
    this.WEB_SUPPORT_TICKETS_TO_SUPPORT_EXEC = 7;

    this.PAGE_LAYOUT = 2;
    this.SEARCH_LAYOUT = 4;
    this.HOMEPAGE_LAYOUT = 3;

    ///////// Email settings created by S.L.Sreenivas
    this.POP3 = 1;
    this.IMAP = 2;
    this.EXCHANGE_OFFICE365 = 3;
    ///////// Email settings created by S.L.Sreenivas

    /////IEMAIL_TYPES//////

    this.EMAIL_TYPES_EML=1;
    this.EMAIL_TYPES_MSG=2;
    this.EMAIL_TYPES_S2M=3;

    //    this.IPRICEBOOK=new function()
    //    {
    this.LOCATION = 1;
    this.CUSTOMER = 2;
    this.DATERANGE = 3;
    this.PRODUCT = 4;
    this.CURRENCY = 5;
    this.UNITS = 6;
    this.QTYRANGE = 7;
    //    };

    // Commission Policies

    this.PERIOD = 1;//COMMISSION PER
    this.TRANSACTION = 2;
    this.TRANSACTION_LINEITEM = 3;

    this.Comm_ITEM = 1;//CATEGORIZED BY
    this.Comm_DEPARTMENT = 2;
    this.Comm_LOCATION = 3;
    this.Comm_CLASS = 4;
    this.Comm_NOCATEGORY = 5;

    this.MSTR_PRODUCT = 2306;
    this.MSTR_DEPARTMENT = 2307;
    this.MSTR_LOCATION = 2312;


    this.FLATRATE = 1;//CALCULATION SCALE
    this.MARGINAL = 2;
    this.LINEAR = 3;
    this.MARGINAL_LINEAR = 4;


    // sales lifecycle

    this.TYPE_HEIRARCHY = 4;//HEIRARCHY=DESIGNATIONS todo: checked with koti sir
    this.MSTR_DESIGNATIONS = 2316;
    this.TYPE_EMPLOYEE = 4;
    //    this.MSTR_EMPLOYEES = 2315;
    this.BEFORE = 0;
    this.MINUTES = 1;

    // sales lifecycle

    /////////// users/roles/teams..... search Type //////////////
    this.TYPE_LEAFS = 0;
    this.TYPE_GROUPS = 1;
    this.TYPE_ALL = 2;
    this.TYPE_INACTIVE_LEAFS= 3;
    this.TYPE_INACTIVE_GROUPS= 4;


    this.ACCESS = 11;  //REPORT RIGHTS TAB
    ////////////////////////////

    /*Filter Constants*/
    //filter type
    this.FILTERMODES_NORMAL = 1;
    this.FILTERMODES_RULES = 2;
    this.FILTERMODES_WORKFLOW = 3;

    //filter coloum names
    this.FILTER_COL_FIELDS = 1;
    this.FILTER_COL_OPERATOR = 2;
    this.FILTER_COL_VALUE = 3;
    this.FILTER_COL_FIELDID2 = 4;
    this.FILTER_COL_CONJUNCTION = 5;
    this.FILTER_COL_COMPARE = 6;
    this.FILTER_COL_LINKFIELDS = 7;
    this.FILTER_COL_PERIOD = 8;
    this.FILTER_COL_MODULENAME = 9;
    this.FILTER_COL_MODULENAME2 = 10;
    this.FILTER_COL_SOURCE_FIELD = 11;
    /*Filter Constants*/

    /* static combo mastertype*/
    //    this.MODULE_FIELDS = 51;    //
    this.MODULE_FIELDS = 152;    //changed by Koti
    this.RELATED_MODULES = 162;

    this.IStdMasters_GENERAL_STATIC_VALUES = 56;
    this.IStdMasters_GENERALMASTER = 58;

    this.Genernal_StaticValues = 56;  // dont store id and do not call servlet
    this.Genernal_Narration = 57;  // dont store id and do not call servlet
    this.Genernal_Master = 58;        // store id and do not call servlet
    this.Genernal_SCRIPTValues = 59;        // store id and do not call servlet
    this.Genernal_SERVER_VALUES = 200;        // connect to the server only once and get values  //todo

    this.COMBO_APP_SCOPE = 1;


    this.COMBO_BY_NAME = 0;
    this.COMBO_BY_CODE = 1;
    this.COMBO_BY_ALIAS = 2;
    this.COMBO_BY_USER_REQUEST= 10;

    this.COMBO_TYPE_LEAFS = 0;
    this.COMBO_TYPE_GROUPS = 1;
    this.COMBO_TYPE_ALL = 2;

    this.COMBO_APP_SCOPE = 1;

    this.COMBO_ATTR_SYSVAL="sysval"


    this.COMBO_RENDER_MODE_CUTOMIZE=1;// used for combo byFlags to differentiate the real or customize mode for the combo values
    this.COMBO_RENDER_MODE_REAL=2;

    /* static combo mastertype*/

    this.RULE_LINKTYPE_MODULE = 0;
    this.RULE_LINKTYPE_VIEW = 1;
    this.RULE_LINKTYPE_FIELD = 2;
    this.RULE_LINKTYPE_PAGEVIEW_FIELD = 3;

    this.LIST_LAYOUT = 1;
    this.HOMEPAGE_LAYOUT = 3;
    this.RELATEDMODULE_LAYOUT=6;
    this.EDIT_LAYOUT = 8;
    this.DETAILED_LAYOUT = 9;
    this.TREE_VIEW_LAYOUT=11;
    this.DASHBOARD_LAYOUT=13;
    this.PRINT_LAYOUT= 14;

    //ISearchin
    this.RECORDS_I_SEE = 1;
    this.RECORDS_I_OWN = 2;
    this.RECORDS_I_OWN_TEAM = 3;
    this.RECORDS_I_AND_SUB_OWN = 4;
    this.RECORDS_I_AND_SUB_OWN_TEAM = 5;
    this.RECORDS_DEFAULT_LOOKIN = 6;
    this.RECORDS_SPECIFIC_TEAM= 7;
    this.RECORDS_SPECIFIC_USER = 8;
    this.RECORDS_SPECIFIC_USER_HEIRARCHY=11;

    this.INPUT_TYPE_DEFAULT = 0;  // Default
    this.INPUT_TYPE_MULTIPLE = 1;  // entry fields like (min and max), multi combo
    this.INPUT_TYPE_RANGE = 2;  // select range like slider, date_ranges

    /*Templates*/
    this.TEMPLATES_EMAIL = 1;
    this.TEMPLATES_SMS = 2;
    this.TEMPLATES_TASK = 3;

    /*Task Template Assign Type*/
    this.TEMPLATES_TASK_OWNER = 1;
    this.TEMPLATES_TASK_MANAGER = 2;
    this.TEMPLATES_TASK_USER = 3;

    /*Below constants are stardard Module homepage components related to the table primary key contstants*/

    this.COMP_RECENTITEMS = 1;

    this.ACTION_RECENTLY_CREATED = 37;
    this.ACTION_RECENTLY_VIEWED = 38;
    this.ACTION_RECENTLY_MODIFIED = 39;
    this.ACTION_NEW = 4;
    this.ACTION_LIST_DELETE = 29;

    /*webleads related*/
    this.ITemplateType_MARKETING = 1;
    this.ITemplateType_TELE_MARKETING = 2;
    this.ITemplateType_CAMPAIGN = 3;

    this.ITemplateType_WEB = 1;
    this.ITemplateType_EMAIL = 2;

    /*webleads related*/

    /*Duplicate Search*/
    this.DUPLICATE_NONE = 0;
    this.DUPLICATE_APPEND = 1;
    /*Duplicate Search*/

    /* Module */
    this.VIEW_MODE_EDIT = 1;
    this.VIEW_MODE_EDIT_TABPANE = 3;
    this.VIEW_MODE_DETAILED = 2;
    this.VIEW_MODE_DETAILED_TABPANE = 4;
    this.VIEW_MODE_IMPORT = 5;
    this.VIEW_MODE_QUICK_CREATE = 6;
    this.VIEW_MODE_EDIT_FIELD = 7;
    this.VIEW_MODE_FIND_FIELDS = 8;
    this.VIEW_MODE_MASS_UPDATE=9;

    this.MODULE_IN_DLG = 1;
    this.MODULE_IN_TREE_DLG = 2;
    this.MODULE_IN_OTHER_SCREEN = 3;
    this.MODULE_IN_WITHOUT_ACTIONS=8;
    //    this.MODULE_IN_IMPORTVIEW = 4;
    /* Module */

    /* Assignment*/
    this.ASSIGNMENT_RULE = 1;
    this.ASSIGNTO = 2;
    this.SPLIT_ASSIGN = 3;
    /* Assignment*/

    /*campaings*/
    this.ICampaign_TELEMARKETING = 5;

    this.CUST_FIELD = 300001;// customFields
    this.CUST_LAYOUT = 100000;// customLayout

    /* MultiSelect */
    this.AVAIL_FIELDS = 1;
    this.SELECTED_FIELDS = 2;

    this.LIST_VALUES = 1;
    this.LIST_NAMES = 2;
    this.LIST_NAMES_VALUES = 3;
    this.LIST_NAMES_VALUES_GROUPIDS = 4;
    /* MultiSelect */
    /* Imports */

    this.ACCOUNTS_CONTACTS = 1;
    /*this.TASKS = 512;
     this.APPOINTMENTS = 768;
     this.ACTIVITIES = 1536;
     this.OPPORTUNITIES = 1792;
     this.ACCOUNTS = 2305;
     this.PRODUCTS = 2306;
     this.CONTACTS = 2309;
     this.CURRENCY_MODULE = 2565; //added by yugandhar. added '_MODULE' since there is another variable already defined with the name cuurency
     this.OPEN_ACTIVITIES = 2572;

     this.MASTER_MODULE = 2304;

     this.LISTMASTER = 2048;

     this.INTERNAL_MODULES = 2560;//+256
     this.CUST_ASSETS=3584
     this.CALL_CLOSE=4096;
     this.CALL_REOPEN=5888;*/


    this.MODULE_SLAB = 256;//+256
    this.MODULES_FRM_FIELDID=175;

    ///////////////////////////////////////////////////////////////////

    this.ACCOUNTS_NAME_FIELDID= 5002;
    this.NONE = 0;
    this.MAPPING_NEW = 0;


    /* Imports */

    this.LEAD_STATUS_CONVERTED=87;

    /*Recurrence*/
    this.IRECURRENCE_DAILY = 0;
    this.IRECURRENCE_WEEKLY = 1;
    this.IRECURRENCE_MONTHLY = 2;
    this.IRECURRENCE_YEARLY = 3;
    this.IRECURRENCE_PERIODIC = 4;
    this.IRECURRENCE_ONETIME = 5;

    this.IRECURRENCE_EVERYWEEKDAY = 0;

    this.IRECURRENCE_ONDAY_EVERY = 0;
    this.IRECURRENCE_ONTHE = 1;

    this.IRECURRENCE_TIME = 0;
    this.IRECURRENCE_USAGE = 1;
    this.IRECURRENCE_EITHER = 2;

    this.IRECURRENCE_ENDBYDATE = 0;
    this.IRECURRENCE_ENDAFTER = 1;

    /*Recurrence*/

    //treeview
    this.USERS = 2564;
    //    this.EDIT = 0;
    this.NEWCHILD = 1;
    this.NEWGROUP = 2;
    this.CLONENODE = 3;
    this.GROUPLIST = 4;
    this.NEWNODE = 0;
    this.GROUPNODE = 1;
    this.MOVEUP = 1;
    this.MOVEDOWN = 2;





    //treeview

    //View Events in Listview
    this.VIEW_EVENT_SELECTALL=0;
    this.VIEW_EVENT_SELECT=1;
    this.VIEW_EVENT_FIRST=2;
    this.VIEW_EVENT_LAST=3;
    this.VIEW_EVENT_PREV=4;
    this.VIEW_EVENT_NEXT=5;
    ///////////////////////
    /*********************WebTemplate*****************/
    this.ERR_DUPLICATE_WEBLEADNAME = 2004;
    this.MSG_SERVER_EXCEPTION = -1;
    /*********************WebTemplate*****************/

    /*********************WorkFlow*****************/
    //    this.RELATED_MODULES_WITH_PARENTS = 68;     //
    this.RELATED_MODULES_WITH_PARENTS = 168;     //value changed by Koti
    /*********************WorkFlow*****************/

    //////////////////views////////////////////////
    this.LISTVIEW = 1;
    this.TREEVIEW = 2;

    this.OK = 1;
    this.YES = 2;
    this.NO = 3;
    this.CANCEL = 35;

    this.NOTIFICATIONS=55;


    this.MSG_SUCCESS = 1;
    this.MSG_SUCCESS_STATUS_ONLY = 4;
    this.MSG_EXCEPTIONS = 5;
    //this.MSG_BUSINESS_MESSAGE= 5;

    this.NOTIFY_INFO = 3;
    this.NOTIFY_MODULE = 4;
    this.NOTIFY_ZOOMBACK =5;
    this.NOTIFY_WARNING =6;
    this.NOTIFY_ERROR=7;

    /////////////// register instance/////////
    this.SCOPE_SCREEN=1;
    this.SCOPE_APP=2
    this.SCOPE_DIALOG=3
    /////////////////////////////////////////

    this.ACTIONS_CALL_LEAD = 43;

    /********************* Authorization *****************/
    this.APPROVAL_CRITERIA_ANY_SELECTED = 1;
    this.APPROVAL_CRITERIA_ALL_SELECTED = 2;
    this.APPROVAL_CRITERIA_MAJORITY = 3;
    this.APPROVAL_CRITERIA_PERCENTAGE = 4;


    this.ISecurity_TYPE_ROLE = 1;

    //    this.IAUTH_AUTO_APPROVE=0;
    this.IAUTH_AUTO_APPROVE=3;  //Changed the value from 0 to 3 by KOTI
    this.IAUTH_AUTO_REJECT=1;
    this.IAUTH_ALERT_TO_USER=2;
    /*******************************************************/

    //*******Calendar*******//
    this.PLANS = 1024;
    //    this.CALENDAR = 1;
    this.CALENDAR = 2582;
    this.SOURCE_TYPE_EVENT=10;
    this.SOURCE_TYPE_TASK=2;
    this.SOURCE_TYPE_APPOINTMENT=3;
    this.SOURCE_TYPE_PLANS=4;
    this.SOURCE_TYPE_VISITS=5;
    this.SOURCE_TYPE_MEETING=6;
    this.SOURCE_TYPE_ACTIVITIES=6;/*TABLE ID*/
    this.SOURCE_TYPE_CALL =7;
    this.SOURCE_TYPE_CALL_TASK =8;
    this.SOURCE_TYPE_LEAVE =9;
    this.BUSY=1;
    this.OutofOffice=2;
    this.WEEKOFF = 1;
    //    this.SUNDAY =0;
    //    this.SATURDAY = 6;

    this.SINGLE_USER=0;
    this.MULTI_USER=1;
    this.Day=2;
    this.Week=3;
    this.Month=4;
    this.FOURDAYS=5;
    this.TODAY=10;
    this.PREVIOUS=11;
    this.NEXT=12;
    this.SU_DAY=20;
    //    this.SU_WEEK=21;
    //    this.SU_FOURDAYS=22;
    //    this.SU_MONTH=23;
    //    this.MU_DAY=30;
    //    this.MU_WEEK=31;
    //    this.MU_FOURDAYS=32;
    //    this.MU_MONTH=33;
    this.ListView =6;

    this.FIVEDAYS_A_WEEK=6;
    //view-layouts
    //this.UNASSIGNED=316;

    //*******Calendar*******//

    //******* Company Profile Business Hours *******//
    this.RND_THE_CLOCK=0;
    this.BUSINESS_HRS=1;
    //******* Company Profile Business Hours *******//

    this.VIEW_MODE_QUICK_CREATE=6;

    this.PIPELINE = 41;
    this.BESTCASE = 42;
    this.COMMIT = 43;
    this.CLOSED = 45;
    this.TYPE_REVENUE = 1;
    this.TYPE_REVENUE_QTY = 2;
    this.TYPE_BOTH = 3;
    this.MODE_YEARLY=1;
    this.MODE_HALFYEARLY =2 ;
    this.MODE_QUATERLY=3;
    this.MODE_MONTHLY=4;

    // ***********Actions***************//
    this.NEW_TASK = 1;
    this.LOG_AN_ACTIVITY = 2;
    this.SEND_AN_EMAIL = 3;
    this.VIEW_ALL = 4;
    this.NEW_APPOINTMENT = 5;
    this.ADD_TO_CAMPAIGN = 6;
    //    this.NEW_CONTACT = 7;
    //            this.MERGE_CONTACTS = 8;
    //            this.FIND_DUPLICATES = 8;     ///Conflict occur at IConstants.IModule.ILayout.EDIT_LAYOUT in CLViewHLP, so changed to 51
    //    this.NEW_OPPORTUNITY = 9;
    this.NEW_CASE = 10;
    this.NEW_PARTNER = 11;
    //    this.NEW_NOTE = 12;
    //    this.ATTACH_FILE = 13;
    //    this.NEW_ROLE = 14;
    //    this.NEW_COMPETITOR = 15;
    //    this.ADD_PRODUCT = 16;
    this.SORT=18;
    this.NEW_EVENT = 22;
    this.NEW = 27;
    this.EDIT = 28;
    this.DELETE = 29;
    // genericn actions////////////
    this.MASS_UPDATE = 30;
    this.CONVERT = 31;
    this.CLOSE = 32;
    this.CLONE = 36;

    this.RECENT_CREATED = 37;
    this.RECENT_MODIFIED = 38;
    this.RECENT_VIEWED = 39;


    this.ADD_MEMBER = 40;
    this.EDIT_MEMBER = 41;
    this.IMPORT_MEMBER = 42;
    this.CALL_LEAD = 43;
    this.ASSIGN = 44;    //// Assignment of tele lead/ Mkt. Lead
    this.SPLIT_AND_ASSIGN = 45;    //// Assignment of tele lead/ Mkt. Lead
    this.SHARE = 46;
    this.NEW_MEETING = 47;
    this.NEW_PLAN = 48;
    //    this.NEW_CALL = 49;
    this.NEW_TELE_CALL = 50;
    this.FIND_DUPLICATES=51;

    this.GROUP=67;
    this.ADD_GROUP=68;
    this.DELETE_ALL=69;
    this.MOVE=70;
    this.MOVE_UP=71;
    this.MOVE_DOWN=72;
    this.SELECT_ALL=73;
    this.UNSELECT_ALL=74;
    this.CUSTOMIZZE_LIST=75;
    this.LIST_VIEW=76;
    this.EXPAND=77;

    this.COLLAPSE=78;

    this.ASSIGN_TEAMS=79;
    this.UNLOCK_USERS=80;
    //quote actions
    //    this.PRINT_QUOTE=95;
    this.PRINT=95;

    this.RAISE_SALESORDER=96;

    //    this.PRINT=101;
    this.ACTIVATE_USERS=104;
    //    this.NEW_DOCUMENT=81;
    //    this.NEW_QUOTE=93;
    //    this.NEW_SALES_ORDER=94;


    this.GET_NOTES=106;
    this.GET_EMAILS=107;
    this.GET_TASKS=108;
    this.NEW_CALL_WORKLOG=110;
    //    this.NEW_CALL_NOTES=111;//
    //    this.NEW_CALL_ATTACH=112;//
    this.ASSIGN_BY_QUEUE=113;
    this.ADD_PART_REPLACED=114;
    this.ADD_PART_REQUESTED=115;


    //    this.NEW_CONTRACT=116;
    this.ALL_USERS= 116; //need to change
    this.CLOSE_REQUEST=117;
    this.EMAIL_QUOTE=118;
    this.ACTION_CALL_RESOLUTION=121;
    this.PICK_REQUEST=122;
    //    this.NEW_CALL_TASK=123;
    this.RE_OPEN=124;
    this.MASS_TRANSFER=125;
    //    this.NEW_MESSAGE=126;

    this.CUSTOMIZE = 127;
    this.APPROVE = 128;
    this.REJECT=129;
    //    this.NEW_ANNOUNCEMENT=132;
    this.PRINT_LABEL=133;
    //    this.NEW_CONTACT_ROLES=134;
    //    this.PRINT_MODULE_DATA=135;
    this.MAP_VIEW=136;
    this.RESET_PASSWORD=137;
    this.SURVEY=140;
    this.EMAIL_MODULE_DATA=146;

    this.TERMINATE = 141;
    this.LEGAL_CASE = 142;
    this.RENEWAL = 143;
    this.CONTRACT_CLOSE = 144;
    this.CONTRACT_TRANSFER = 145;
    this.RAISE_SERIVICE_QUOTE=147;

    //Layout Ids
    this.ACTIVE_USERS= 146;
    this.INACTIVE_USERS= 147;
    this.LOCKED_USERS= 148;

    this.CHANGE_ISSUE = 149;
    this.IN_ACTIVATE = 153;
    this.UNIT_TO_ENQUIRY=154;
    this.UNIT_TO_CONTRACT=155;
    this.PMS_BOOKINGS=157;
    this.EMAIL_SERVICE_QUOTE=158;
    this.RAISE_SPAREPART_REQUEST = 159;
    this.RAISE_SPAREPART_REPLACED = 160;
    this.REPLY =161;
    this.REPLY_ALL =162;
    this.MISSING =163;
    this.VALIDATE =164;
    this.DELIVERY_CLOSE =165;
    this.DRIVERCHANGE =166;
    this.TRUCKCHANGE =167;
    this.SHIPMENT_RETURN =168;
    this.DAMAGE_SHIPMENT =169;
    this.ROUTE_CHANGE =170;
    this.RETURN_WAYBILL =171;
    this.PICKED_UP =174;
    this.TRUCKANDDRIVERCHANGE =178;
    this.CONFIRM_BY_CHECKER=179;
    this.CONSIGNEE_WILL_COLLECT=180;
    this.REQUESTED_TO_DELIVER=181;
    this.PAYMENT_PROCESSED=182;
    this.CMS_ACCIDENT=183;
    this.CMS_TRUCKDISPATCHED=184;
    this.CMS_HOLD=186;
    this.CMS_RELEASE=187;
    this.CALL_RESPONSE=188;
    this.EXPORT_MAILCHIMP=189;
    this.CHANGE_STATUS=190;
    this.APPLICATION_FEE=191;
    this.ACCEPT_APPLICATION=192;
    this.REJECT_APPLICATION=193;
    this. ADMISSION_FEE=194;
    this.REGISTER=195;
    this.CONFIRM_DELIVERY=196;

    this.CONVERT_TO_LEAD = 175;
    this.CONVERT_TO_OPPORTUNITIES = 176;
    this.CONVERT_TO_REQUEST = 177;
    this.ADD_TO_OPPORTUNITIES = 185;

    this.STANDARD_ACTIONS_LIMIT = 1000;

    // ***********Actions***************//

    // *********** ToastWiondow ***************//
    this.PRONG_NONE = 0;
    this.PRONG_LEFT = 1;
    this.PRONG_RIGHT = 2;
    this.PRONG_TOP = 3;
    this.PRONG_BOTTOM = 4;
    // *********** ToastWiondow ***************//

    //*********** Support Queue ************//
    this.ISSUES = 2323;
    this.PRIORITY = 2051;
    this.CATEGORY = 2313;
    this.SUBCATEGORY = 2314;

    //*********** Support Queue ************//


    /*targets*/
    this.YEARLY =1;
    this.PRODUCTWISE_VALUES = 3;
    this.PRODUCTWISE_QTY = 4;
    this.CATEGORYWISE_VALUES = 5;
    this.CATEGORYWISE_QTY = 6;
    this.VALUES = 1;
    this.QTY = 2;
    this.VALUES_QTY = 3;
    /*targets*/

    /*Integration Settings*/
    this.USE_SAME_CREDITIALS_AS_CRM=0;
    this.USE_COMMON_USERPWD=1;
    this.TYPE_FOCUS7=1;
    this.TYPE_FOCUS8=2;
    this.TYPE_MYOB=3;
    this.TYPE_TALLY=4;
    this.TYPE_XERO=5;
    this.TYPE_QUICKBOOKS=6;
    this.TYPE_OTHERS=7;
    // External Other Integrations 101 to 200
    this.TYPE_MAILCHIMP=101;
    this.TYPE_KNOWLARITY=102;
    this.TYPE_AMEYO=103;
    // External Social Integrations 201 to 300 todo

    /*this.ERP_INTEGRATION_SETTINGS= 629;
    this.ERP_FOCUS_MAPPINGS= 630;*///old
    this.ERP_INTEGRATION_SETTINGS= 1681;
    this.ERP_FOCUS_MAPPINGS= 1682;
    this.APP_TYPE_PUBLIC= 1;
    this.APP_TYPE_PARTNER= 2;
    this.GET_REQUEST_TOKEN = 1;
    this.GET_ACCESS_TOKEN = 3;



    /*************Module Types**************/
    //this.MODULETYPE_STRINGLIST = 70;
    //  this.MODULETYPE_NUMBERLIST = 71;

    //************ Dashboard **********************//


    this.IDashboard=new function()
    {
        this.TYPE_OWNER=0;
        this.TYPE_ASSIGNED=1;
        this.TYPE_SHARED=2;

        this.DASHLET_GRAPH =1;
        this.DASHLET_REPORTS =2;
        this.DASHLET_RSSFEEDS =3;
        this.DASHLET_WEBLINK =4;
        this.DASHLET_ALERTS =5;
        this.DASHLET_MAP = 6;
        this.DASHLET_HTML = 7;
        this.DASHLET_METRIC = 8;
        this.DASHLET_IMAGE = 9;
        this.DASHLET_COMPOSITE_GRAPH = 10;
        this.DASHLET_COMPOSITE_REPORT = 11;
        this.DASHLET_ANNOUNCEMENT = 12;
        this.DASHLET_MESSAGES = 13;
        this.DASHLET_FOCUS_REPORTS=14;
        this.DASHLET_CALENDAR=15;
        this.DASHLET_GROUP_CAROSUEL=16;
        this.DASHLET_NOTIFICATIONS=17;
        this.DASHLET_SHORTCUTS=18;
        this.DASHLET_HASHTAGS=19;
        this.DASHLET_RECENTITEMS = 20;
        this.DASHLET_GANTTCHART = 21;

        this.BORDER_TYPE_SIMPLE=1;
        this.BORDER_TYPE_CURVE=2;

        this.DASHBOARD_VER1=0;
        this.DASHBOARD_VER2=1;

        this.VALUE_AS_ACTUAL=0;
        this.VALUE_AS_PERCENT=1;
        this.VALUE_AS_THOUSANDS=2;
        this.VALUE_AS_LAKHS=3;
        this.VALUE_AS_MILLIONS=4;
        this.VALUE_AS_CRORES=5;
        this.GROUP_CAROSUEL=1;
        this.DISPLAYTYPE_LIST=1;
    };

    //************ Dashboard **********************//

    //************ Incremental Condition **********************//
    this.FIELD = 1;
    this.LOGIN = 2;
    this.CHARACTER_INPUT = 3;
    this.DATE = 4;
    this.INCREMENT = 5;
    this.DECREMENT = 6;
    this.USER_INPUT = 7;
    this.INCREMENT_LOCATION = 8;
    this.INCREMENT_DEPARTMENT = 9;
    //************ Incremental Condition **********************//
    //************ Customization **********************//
    this.BUSINESSCARDCUST = 0;
    this.FOLLOWUPCUST = 1;
    //************ Customization **********************//

    // ************************ Date Range ************************//
    /* this.FY_CURRENT = 1;
     this.FY_PREVIOUS = 2;
     this.FY_NEXT = 3;
     this.FY_CURRENT_PREVIOUS = 4;
     this.FY_CURRENT_NEXT = 5;

     this.FQ_CURRENT = 6;
     this.FQ_PREVIOUS = 7;
     this.FQ_NEXT = 8;
     this.FQ_CURRENT_PREVIOUS = 9;
     this.FQ_CURRENT_NEXT = 10;

     this.YEAR_CURRENT = 11;
     this.YEAR_PREVIOUS = 12;
     this.YEAR_NEXT = 13;
     this.YEAR_CURRENT_PREVIOUS = 14;
     this.YEAR_CURRENT_NEXT = 15;
     this.YEAR_TO_DATE = 16;

     this.MONTH_CURRENT = 17;
     this.MONTH_PREVIOUS = 18;
     this.MONTH_NEXT = 19;
     this.MONTH_CURRENT_PREVIOUS = 20;
     this.MONTH_CURRENT_NEXT = 21;
     this.MONTH_TO_DATE = 22;

     this.WEEK_CURRENT = 23;
     this.WEEK_PREVIOUS = 24;
     this.WEEK_NEXT = 25;
     this.WEEK_CURRENT_PREVIOUS = 26;
     this.WEEK_CURRENT_NEXT = 27;

     this.DAY_CURRENT = 28;
     this.DAY_PREVIOUS = 29;
     this.DAY_NEXT = 30;
     this.DAY_PREVIOUS_SEVEN = 31;
     this.DAY_PREVIOUS_THIRTY = 32;
     this.DAY_PREVIOUS_SIXTY = 33;
     this.DAY_PREVIOUS_NINETY = 34;
     this.DAY_PREVIOUS_N = 35;
     this.DAY_NEXT_SEVEN = 36;
     this.DAY_NEXT_THIRTY = 37;
     this.DAY_NEXT_SIXTY = 38;
     this.DAY_NEXT_NINETY = 39;
     this.DAY_NEXT_N = 40;*/
    // ************************ Date Range ************************//

    this.PRODRATE_START=1;
    this.PRODRATE_END=50;

    this.EXCHANGERATE_START=51;
    this.EXCHANGERATE_END=55;

    this.STOCK_START=56;
    this.STOCK_END=100;

    this.SLA_START=101;
    this.SLA_END=150;

    this.WORK_TYPE_RATE_START=151;
    this.WORK_TYPE_RATE_END=200;

    this.IDATE=new function()
    {
        // ************************ Date Range ************************//
        this.DT_NONE=-1;
        this.DT_CUSTOM=0;
        this.FY_CURRENT = 1;
        this.FY_PREVIOUS = 2;
        this.FY_NEXT = 3;
        this.FY_CURRENT_PREVIOUS = 4;
        this.FY_CURRENT_NEXT = 5;
        this.FY_CURRENT_TILL_DATE = 41;

        this.FQ_CURRENT = 6;
        this.FQ_PREVIOUS = 7;
        this.FQ_NEXT = 8;
        this.FQ_CURRENT_PREVIOUS = 9;
        this.FQ_CURRENT_NEXT = 10;

        this.YEAR_CURRENT = 11;
        this.YEAR_PREVIOUS = 12;
        this.YEAR_NEXT = 13;
        this.YEAR_CURRENT_PREVIOUS = 14;
        this.YEAR_CURRENT_NEXT = 15;
        this.YEAR_TO_DATE = 16;

        this.MONTH_CURRENT = 17;
        this.MONTH_PREVIOUS = 18;
        this.MONTH_NEXT = 19;
        this.MONTH_CURRENT_PREVIOUS = 20;
        this.MONTH_CURRENT_NEXT = 21;
        this.MONTH_TO_DATE = 22;

        this.WEEK_CURRENT = 23;
        this.WEEK_PREVIOUS = 24;
        this.WEEK_NEXT = 25;
        this.WEEK_CURRENT_PREVIOUS = 26;
        this.WEEK_CURRENT_NEXT = 27;

        this.DAY_CURRENT = 28;
        this.DAY_PREVIOUS = 29;
        this.DAY_NEXT = 30;
        this.DAY_PREVIOUS_SEVEN = 31;
        this.DAY_PREVIOUS_THIRTY = 32;
        this.DAY_PREVIOUS_SIXTY = 33;
        this.DAY_PREVIOUS_NINETY = 34;
        this.DAY_PREVIOUS_N = 35;
        this.DAY_NEXT_SEVEN = 36;
        this.DAY_NEXT_THIRTY = 37;
        this.DAY_NEXT_SIXTY = 38;
        this.DAY_NEXT_NINETY = 39;
        this.DAY_NEXT_N = 40;

        this.MONTH_FIRST_DATE = 41;

        this.CH_CURRENT = 42; // calendar half
        this.CH_PREVIOUS = 43;
        this.CH_NEXT = 44;
        this.CH_CURRENT_PREVIOUS = 45;
        this.CH_CURRENT_NEXT =46;

        this.CQ_CURRENT = 47; // calendar quarter
        this.CQ_PREVIOUS = 48;
        this.CQ_NEXT = 49;
        this.CQ_CURRENT_PREVIOUS =50;
        this.CQ_CURRENT_NEXT = 51;

        this.CALENDAR_DATE = 52;// Date from DateTime ( Ex. 09/12/2011  from  09/12/2011 04:26:43 PM )
        this.CALENDAR_TIME = 53;// Time from DateTime ( Ex. 04:26:43 PM  from  09/12/2011 04:26:43 PM )
        this.CALENDAR_HOUR = 54;// Time from DateTime ( Ex. 04:26:43 PM  from  09/12/2011 04:26:43 PM )
        this.MONTH_WEEK_CURRENT=55;// to date format type --- week with month ex: CW1 -JAN
        this.MONTH_FIRST_DATE = 56;
        this.FIRST_FY_TO_DATE= 57;

        // ************************ Date Range ************************//
    };

    this.IResource = new function()
    {
        this.SOURCE_TYPE_DB=1;
        this.SOURCE_TYPE_FOLDER=2;
        this.SOURCE_TYPE_TEMP_FOLDER=3;
    };
    this.CUSTOM_HOURS = 2;
    this.HOURS_24_7 = 3;

    this.SEARCH_ADVANCED = 1;
    this.SEARCH_RUN = 0;
    this.SEARCH_MENU = 3;

    //    ********** SMS Configuration *************
    this.URL = 0;
    this.WEB_SERVICE = 1;
    this.JAVA_SERVICE = 2;

    //    ********** External Module Definition *************
    this.TYPE_LIST = 0;
    this.TYPE_BUTTON = 1;
    this.TYPE_LINK = 2;
    this.TYPE_MODULE_SAVING=3;
    this.TYPE_STD_ACTION=4;
    this.TYPE_SALES_STAGE=5;
    this.TYPE_ON_APPROVAL=6;
    this.TYPE_WORKFLOW=7;
    this.TYPE_RELATED_MODVIEW=8;
    this.TYPE_ON_CREATE=9;
    this.TYPE_ON_UPDATE=10;
    this.TYPE_ON_DELETE=11;
    this.TYPE_ON_FIELD_ENTER=12;
    this.TYPE_ON_FIELD_EXIT=13;
    this.TYPE_ON_LOAD=14;
    
    this.SAVE_BEFORE=1;
    this.SAVE_AFTER=2;
    this.ON_AUTHORIZE=3;
    this.ON_ASSIGN=4;

    this.SRC_URL=0;                     /// bSourceType in cCrm_LayoutActions
    this.SRC_JAVASCRIPT=1;
    this.SRC_JAVASERVICE=2;
    this.SRC_WEBSERVICE=3;
    this.SRC_PROCEDURE=4;
    this.SRC_EXT_REPORT=5;
    this.SRC_STANDARD_ACTION=6;

    this.DISP_CURRENT_WINDOW = 0;         /// iDisplayType in cCrm_LayoutActions
    this.DISP_DIALOG = 1;
    this.DISP_NOHEADER = 2;
    this.DISP_BACK_GROUND=3;  // Service

    //    ********** Manage Applications *************
    this.MANAGEAPPS = 162;
    //    ********** Manage Applications *************
    this.REPORTS = 2561;
    //    ********** Switch *************
    this.SWITCH_ON = 1;
    this.SWITCH_OFF = 0;
    //    ********** Switch *************
    this.IChart = new function()
    {
        this.TYPE_BAR=1;
        this.TYPE_BAR_HORIZONTAL=2;
        this.TYPE_PIE=3;
        this.TYPE_LINE=4;
        this.TYPE_AREA=5;
        this.TYPE_FUNNEL=6;
        this.TYPE_BUBBLE=7;
        this.TYPE_GUAGE=8;
        this.TYPE_BOX = 9;
        this.TYPE_BOX_TOTAL= 10;
        this.TYPE_DONUT= 12;
        this.TYPE_BAR_STACKED= 13;
         this.TYPE_METRIC=14;
         this.TYPE_GEO_CHART_COUNTRIES=15;
          this.TYPE_GEO_CHART_CITIES=16;

        this.ILegend = new function()
        {
            this.NONE = 0;
            this.TOP = 1;
            this.BOTTOM = 2;
            this.LEFT = 3;
            this.RIGHT = 4;
        };
    };

    this.IPRIORITY = new function()
    {
        this.NORMAL=10;
        this.LOW=11;
        this.MEDIUM=12;
        this.HIGH=13;
    };

    this.IRECIPIENTS=new function()
    {
        this.SCR_INTRA_NET_EMAIL=1;
        this.SCR_SEND_EMAIL=2;
        this.SCR_NOTIFY_EMAIL=3;
        this.SCR_SHARE_USERS=4;
    };

    this.STANDARD_LIST_LIMIT=20000; /// List Master Std. inserts limit


    this.IModule= new function()
    {
        this.STATUS_STOP_SUBMIT=0;
        this.STATUS_CONTINUE=1;
        this.STATUS_URL=2;
    };
    this.Report_Focus = 1;
    this.Report_Crystal= 2;
    this.Report_Jasper= 3;
    this.Report_Focus8= 4;
    this.Report_Myob= 5;
    this.Report_Tally= 6;
    this.Normal= 0;
    this.Master_Control= 1;
    this.Report_Combobox= 5;
    this.REP_Integer= 1;
    this.REP_Text= 2;
    this.REP_DATERANGE= 3;
    this.AS_ON_DATE= 4;
    this.REP_TIMEFRAME= 6;
    this.REP_CHECK_BOX=7;
    this.REP_RADIO_BUTTON=8;

    this.IActionType = new function()
    {
        this.CHANGE_COLOR=0;
        this.DISPLAY_ICON=1;
        this.CHANGE_BGCOLOR=2;
        this.CHANGE_STYLE=3;
    };
    this.IIconPlacement = new function()
    {
        this.LEFT=0;
        this.REPLACE=1;
        this.RIGHT=2;
    };
    this.IIndicator = new function()
    {
        this.UP_RED=1;
        this.UP_YELLOW=2;
        this.UP_GREEN=3;
        this.UP_GREY=4;

        this.DOWN_RED=5;
        this.DOWN_YELLOW=6;
        this.DOWN_GREEN=7;
        this.DOWN_GREY=8;

        this.CHECK_RED=9;
        this.CHECK_YELLOW=10;
        this.CHECK_GREEN=11;
        this.CHECK_GREY=12;

        this.CROSS_RED=13;
        this.CROSS_YELLOW=14;
        this.CROSS_GREEN=15;
        this.CROSS_GREY=16;

        this.STAR_RED=17;
        this.STAR_YELLOW=18;
        this.STAR_GREEN=19;
        this.STAR_GREY=20;

        this.WARNING_RED=21;
        this.WARNING_YELLOW=22;
        this.WARNING_GREEN=23;
        this.WARNING_GREY=24;

    };

    this.IRequest = new function()
    {
        // Request State like Open,On-Hold,Resolved,Closed,In-Progress,New
        this.OPEN=57;
        this.ON_HOLD=58;
        this.RESOLVED=59;
        this.CLOSED=60;
        this.NEW= 132;
        this.IN_PROGRESS=131;
        // Request State like UnAssigned,Assigned,Escalated,Re-open,Re-Assigned
        this.UN_ASSIGNED=133;
        this.RE_OPEN=136;
    };
    this.IAPPROVAL_STATUS = new function()
    {
        this.APPROVED=114;
        this.PENDING=115;
        this.STOPPED=116;
        this.REJECTED=117;
        this.MORE_INFO=142;
    };
    this.IStdApplications =new function()
    {
        this.CORE=0;
        this.MARKETING=1;
        this.TELEMARKETING=2;
        this.SALES=3;
        this.SUPPORT=4;
        this.ADMINISTRATION=5;
    };
    this.IContractPeriod = new function()
    {
        this.THREE_MONTHS = 1;
        this.SIX_MONTHS = 2;
        this.ONE_YEAR = 3;
        this.TWO_YEARS = 4;
        this.THREE_YEARS = 5;
        this.FOUR_YEARS = 6;
        this.FIVE_YEARS = 7;
        this.CUSTOM = 8;
        this.ONE_MONTH = 9;
        this.TWO_MONTHS = 10;
        this.TEN_MONTHS = 11;
        this.TWENTY_MONTHS = 12;
    };


    this.IActions=new function()
    {
        this.SAVE = 33;
        this.SAVE_AND_NEW = 34;
        this.CANCEL = 35;
        this.CLONE = 36;
    };

    this.IDismiss_action=new function()
    {
        this.ALL=0;
        this.LIST_VIEW=1;
        this.DETAILED_VIEW=2;
        this.EDIT_VIEW=3;
        this.SPECIFIC_ACTIONS=4;
    };

    this.IWorkFlow =new function(){
        this.USER = 1;
        this.RECIPIENT = 2;
        this.MANAGER = 3;
        this.SPECIFIC_USER=4;

        this.ACTIONS = 0;
        this.TIMEBASED_ACTIONS = 1;

        this.WF_SELF = 1;
        this.WF_HIERARCHY = 5;
        this.WF_TEAM = 2;
        this.WF_ROLE = 6;
        this.WF_CONTACT = 7;
        this.WF_CREATEDBY =8;
        this.WF_MODIFIEDBY =9;
        this.WF_APPROVEDBY =10;
        this.WF_USERTYPE =11;
    };

    /*** Rules***/
    this.MASTERID = 1;
    this.TRANSID = 1;
    this.NAME = 2;
    /*** Rules***/
    this.STATUS_IN_PROGRESS = 47;
    this.ISocial=new function(){
        this.OUTLOOK=1;
        this.GOOGLE=1;
        this.FACEBOOK=1;
        this.TWITTER=1;

    };
    this.ITypes=new function(){
        this.LANGUAGES= 164;
    };

    this.IAddressTypes=new function()
    {
        this.BILLING=0;
        this.SHIPPING=1;
    };

    this.APPLICATION=1;
    this.MOBILE_BROWSER=2;
    this.OFFLINE=3;
    this.MOBILE_APP=4;
    this.API=5;
    this.PORTAL=6;
    this.CLOUD=7;
    /*this.APPLICATION=0;
     this.MOBILE_BROWSER=1;
     this.OFFLINE=2;
     this.MOBILE_APP=3;
     this.API=4;
     this.PORTAL=5;
     this.CLOUD=6;*/



    this.IUSERTYPES=new function()
    {
        this.CUSTOMER = 2;
        this.SERVICE=4;
    };

    this.IFont = new function()
    {

        this.ARIAL = 1;
        this.CALIBRI = 2;
        this.CAMBRIA = 3;
        this.CAMBRIA_MATH = 4;
        this.CANDARA = 5;
        this.COMIC_SANS_MS = 6;
        this.CONSOLAS = 7;
        this.CONSTANTIA = 8;
        this.CORBEL = 9;
        this.COURIER = 10;
        this.COURIER_NEW = 11;
        this.FIXEDSYS = 12;
        this.FRANKLIN_GOTHIC = 13;
        this.GABRIOLA = 14;
        this.GEORGIA = 15;
        this.IMPACT = 16;
        this.LUCIDA_CONSOLE = 17;
        this.LUCIDA_SANS_UNICODE = 18;
        this.MICROSOFT_SANS_SERIF = 19;
        this.MS_SANS_SERIF = 20;
        this.MS_SERIF = 21;
        this.PALATINO_LINOTYPE = 22;
        this.SEGOE_PRINT = 23;
        this.SEGOE_SCRIPT = 24;
        this.SEGOE_UI = 25;
        this.SEGOE_UI_SYMBOL = 26;
        this.SYSTEM = 27;
        this.TAHOMA = 28;
        this.TIMES_NEW_ROMAN = 29;
        this.TREBUCHET_MS = 30;
        this.VERDANA = 31;


        this.IStyle = new function()
        {
            this.NORMAL = 0;
            this.BOLD = 1;
            this.ITALIC = 2;
            this.UNDERLINE = 3;
            this.STRIKE_THROUGH = 4;
        };

    };
    this.MY_REMINDER=188;
    this.IACCOUNTTYPE_CUSTOMER = 5;
    this.IACCOUNTTYPE_CUSTOMERVENDOR = 7;
    this.QUEUE_MEMBERS = 176;
    this.FREQUENCY_TEMPLATES=2606;

    this.MINUTES = 1;
    this.HOURS = 2;
    this.DAYS = 3;
    this.WEEKS = 4;

    this.iPopupWidth = 350;

    this.IREMINDERS=new function()
    {
        this.FREQUENCY_TEMPLATES=0;
    };

    this.IAnnouncement_CUSTOMERS =new function()
    {
        this.CUSTOMERS=0;
        this.ALL_CUSTOMERS=1;
        this.FILTER=2;

    };

    this.IAnnouncement_CONTACTS =new function()
    {
        this.CONTACTS=0;
        this.ALL_CONTACTS=1;
        this.FILTER=2;

    };

    this.IAnnouncement =new function()
    {
        this.ALLUSERS=1;
        this.CUSTOMERS=2;
        this.ALL_CUSTOMERS=3;
        this.CUSTOMER_FILTER=4;
        this.CONTACTS=5;
        this.ALL_CONTACTS=6;
        this.CONTACT_FILTER=7;

    };

    this.ICSSHomeCustomType =new function()
    {
        this.WIDGET=1;
        this.MENU=2;
        this.RIGHT_SECTION=3;
        this.FOOTER=4;
    };
    this.ICSSCustomMenuType =new function()
    {
        this.MODULE=1;
        this.WEB_LINK=2;
        this.HTML=3;
        this.IMAGE=4;
        this.MENU=5;

    };
    this.SECURITY=new function()
    {
        //SPECIAL RIGHTS BIT POSITIONS FOR CALLS MODULE
        this.RE_OPEN=1;//Allow Re-Open
        this.EDIT=2;//Allow editing of Calls after close
        //this.DELETE=3;//Allow deleting of Calls
        this.UPDATE=3;//Allow update related modules after close
        this.CALL_CLOSE=4;
        this.SURVEY=5;
        this.CHANGE_ISSUE=6;
        this.REOPEN_CLOSE=7;
    };

    this.IMENU=new function()
    {
        this.ITEMTYPE_SERVICES_PRODUCT=13;
        this.ITEMTYPE_CALL_SLOT_DEFINITION=17;
        this.ITEMTYPE_STAGE_UPDATION=22;

        this.TYPE_MODULE = 1;
        this.TYPE_REPORT = 2;
        this.TYPE_TOOLS = 3;
        this.TYPE_EXTERNALMODULE = 4;
        /// reserved from 5 to 12
        this.TYPE_MODULE_READ_ACTION = 5;
        this.TYPE_MODULE_WRITE_ACTION = 6;
        this.TYPE_MODULE_SHARE_ACTION = 7;
        this.TYPE_MODULE_TRANSFER_ACTION = 8;
         this.ITEMTYPE_ANALYSER=26;//360 degrees dashlet
    };
    this.ILISTMASTER=new function()
    {
        this.INOTETYPE=new function()
        {
            this.TASK_DETAILS=140;
        };
    };
    this.IDocuments =new function()
    {
        this.IMAGE_ORIGINAL=0; //orginal
        this.IMAGE_LIST=1;
        this.IMAGE_BISSNESSCARD=2; //business card
        this.IMAGE_DETAILED=3;
        this.STARTSWITH=1;
        this.ENDSWITH=2;
    };
    this.IPMSSCHEDULE =new function()
    {

        this.ONETIME =1;
        this.INSTALLMENT =2;
        this.STAGE_WISE =3;

        this.TOKEN_AMOUNT=1;
        this.BOOKING_AMOUNT=2;
        this.INSTALLMENT_AMOUNT=3;
        this.STAGE_AMOUNT=4;
        this.REMAINING_AMOUNT=5;

        /*
         this.BOOKING_AMOUNT=1;
         this.INSTALLMENT_AMOUNT=2;
         this.STAGE_AMOUNT=3;
         this.REMAINING_AMOUNT=4;
         */

        this.AVAILABLE = 167;
        this.BOOKED = 168;
        this.RESERVE = 169;
        this.ALL = 170;
        this.CORNER = 171;
        this.PROPERTY=2327;
        this.UNITS=2321;
        this.VENTURES=2332;
        this.BOOKINGS=7680;
        this.UNIT_RESERVATION=8960;
        this.CANCEL_BOOKING=7936;
        this.TRANSFER_BOOKING=10752;
        this.PMS_UNITS=2337;
        this.BLOCKS=2333;
        this.FLOORS=2334;
    };
    this.IPMS_UNIT_STATUS=new function()
    {
        this.VACANT= 162;
        this.OCCUPIED=163;
        this.UNDER_OFFER=164;
        this.RENOVATION=165;
        this.BOOKED=166;
    };

    this.IHTML5_SUPPORT=new function()
    {
        this.UPLOAD=0;
        this.COLOR_PICKER=1;
    };

    this.IListviewFilters=new function()
    {
        this.ALPHA_SEARCH=1;
        this.TEXT_SEARCH=2;
        this.ADVANCE_SEARCH=3;
        this.LAYOUT_SEARCH=4;
        this.LOOKIN_SEARCH=5;
        this.NUMARIC_SEARCH=6;
        this.FIELD_SEARCH=7;
        this.SNAPSHOT_SEARCH=8;
    }

    this.ICreateProductSet=new function()
    {
        this.PERCENTAGE=1;
        this.VALUE=2;
        this.PICK_RATE =1;
        this.FIXED_RATE =2;
        this.TO_SET =1;
        this.INDIVIDUALLY =2;
        this.EQUAL =3;
        this.PROPORTIONATE =4;
    }
    this.IBlackListCust=new function()
    {
        this.ADDTOBLACKLIST=150;
        this.BLACKLIST_RELEASE=151;
        this.BLACKLIST_HISTORY=152;
        this.BLACKLISTED_MODULES = 766;
    }
    this.GROUPNAMES = new function()
    {
        this.APP_CUSTOMIZATION = 13;
    }

    this.FILTERTYPE = new function()
    {
        this.APPROVAL_PROCESS = 1;
    }







    this.IREPORTS = new function(){
        this.NONE = 0;
        this.All_ITEMS = -1;
        this.RECENTLY_VIEWED = -2;
        this.ITEMS_I_CREATED = -3;
    };


    this.ILocationTracker=new function()
    {
        this.USER_STATUS_NORMAL=0;
        this.USER_STATUS_IDLE=1;
    };
    this.IStringFunctions=new function()
    {
        this.NONE=0;
        this.LOWER=50;
        this.UPPER=51;
        this.TITLE_CASE=52;
        this.ARABIC_NUMBER=53;
        this.MIN=54;
        this.MAX=55;
        this.SUM=56;
    };

    this.IOPPORTUNITYSTATUS = new function()
    {
        this.PROGRESS = 36;
        this.CLOSED = 37;
        this.LOST = 38;
        this.ABANDONED = 39;
        this.NOTINTERESTED = 40;
    };

    this.IStatus=new function()
    {
        this.CANCELLED=49;
        this.COMPLETED=48;
        this.INPROGRESS=47;
        this.NOTSTARTED=46;
    };

    this.ITheme=new function()
   {
       //packbit values from company DTO settings

       this.DEFAULT  = 1;
       this.SEAGREEN=2;
       this.SLATEGREY=3;


   };
    this.IMODULE_SETTINGS=new function()
    {
        //packbit values from company DTO settings
        this.WINDOW_STYLE_MULTI_PANE =4;
    };

    this.IMODULE_WINDOW=new function()
   {
       //packbit values from company DTO settings

       this.DEFAULT  = 0;
       this.MULTI_PANE =4;
       this.SPLIT_PANE = 5;
       this.TABBEDT_PANE = 6;
       this.REPORT_SPLITPANE = 7;
       this.SPLIT_PANE_WITH_TABBED_PANE = 8;
       this.REPORT_SPLITPANE_WITH_TABBED_PANE = 9;

   };
    this.ISPLIT_PANE_TYPE = new function(){
     this.GENERAL_PANE = 0;
     this.LEFT_PANE = 1;
    };

    this.ICreate_Action_Type=new function()
    {
        this.TYPE_STANDARD_ACTION=0;
        this.TYPE_MODULE_CREATION_ACTION=1;
        this.TYPE_FIELD_CREATION_ACTION_BASE=2;
        this.TYPE_FIELD_CREATION_ACTION_CHILD=3;
    };

    this.INUMBER_FORMAT=new function()
    {
        this.NONE= 0;
        this.LAKH = 1;
        this.MILLION = 2;
        this.DEFAULT = 3;
    };
    this.IAppointment = new function()
    {
        this.TYPE_APPOINTMENT = 1;
        this.TYPE_EVENT = 2;
        this.TYPE_MEETING = 3;
    };
    this.ISave_Url_Type = new function(){
        this.PRIMARY = 0;
        this.SECONDARY = 1;
    };

    this.IPrintAttachments=new function()
    {
        this.ISourceType=new function()
        {
            this.REPORT = 1;
            this.PRINT_LAYOUT = 2;
        };
        this.IAttachmentType=new function()
        {
            this.REPORT = 1;
            this.PDF = 2;
        };
        this.IPosition=new function()
        {
            this.HEADER = 1;
            this.FOOTER = 2;
        };
    };
    this.IListView_Actions = new function(){
      this.REFRESH = 1;
      this.LAYOUT_CHANGE = 2;
      this.SEARCH = 3;
      this.SORTING = 4;
      this.DELETE =5;

    };
    this.ILANGUAGE_TYPE = new function()
    {
      this.ENGLISH = 0;
      this.ARABIC = 1;
    }
    this.IMessageCodes=new function()
    {
        this.ERR_INTEGRATION_ALREADY_DEFINED_LOC = 4094;
        this.FAILED_TO_SAVE_INTEGRATION = 4097;
    };
};

var ICMSConstants=new function()
{
    this.IPricingTypes=new function()
    {
        this.DOMESTIC =0;
        this.INTERNATIONAL =1;
    };
    this.IPriceCategories=new function()
    {
        this.WEIGHT_WISE =1;
        this.WEIGHT_CLASS =2;
        this.WEIGHT_SLAB =3;
        this.DELIVERY_TYPE =4;

        this.OVERALL_PALLET=5;
        this.DESTINATION_WISE_PALLET=6;
        this.PALLET_BOX_DESTINATION=7;
        this.PALLET_SIZE_WISE=8;

        this.OVERALL_FTL=9;
        this.OVERALL_LTL=10;
        this.FTL_DESTINATION_GRADES=11;
    };
    this.ICalculationTypes=new function()
    {
        this.Flat=1;
        this.Cumulative=2;
    };
    this.IServiceTypes =new function()
    {
        /*this.Express_Worldwide=1;
        this.Economy_Air=2;
        this.Economy_Road=3;*/
            this.EXPRESS=206;
            this.FRIDAY=207;
            this.INTERNATIONAL_AIR=208;
            this.INTERNATIONAL_ROAD=209;
            this.ODA=210;
            this.SAME_DAY=211;
            this.INTERCITY=212;
            this.EXPRESS_WORLDWIDE=255;
            this.WH_TO_WH=256;
            this.WH_TO_CUSTOMER=257;
            this.CUSTOMER_TO_WH=258;
    };
    this.IFreightCharges =new function()
    {
        this.Doc_Inbound=1;
        this.Doc_Outbound=2;
        this.Non_Doc_Inbound=3;
        this.Non_Doc_Outbound=4;
    };

    this.ISTATUS =new function()
    {
        this.PENDING= 233;
        this.CANCELED= 234;
        this.VALID= 235;
        this.COURIER_ASSIGNED= 236;
        this.COURIER_PICKED_UP= 237;
        this.CONFIRMED= 238;
        this.SHIPMENT_AT_WAREHOUSE= 239;
        /// Need to give another status for pre-paid shipments about payment BARCODE_GENERATED_PAYMENT_PENDING
//        this.BARCODE_GENERATED= 240;
        this.READY_TO_DISPATCH= 240;
        this.MANIFEST_GENERATED= 241;
        this.DISPATCHED= 242;
        this.ARRIVED_AT_DESTINATION= 243;
        this.SHIPMENT_MISSING= 244;
        this.MIS_ROUTED= 245;
        this.DAMAGED= 246;
        this.DELIVERY_ASSIGNED= 247;
        this.ON_THE_WAY_TO_DELIVERY=248;
        this.RETURNED_TO_DESTINATION_WAREHOUSE= 249;
        this.RETURNED_TO_ORIGIN= 250;
        this.DELIVERED= 251;
        this.COMPLETED= 252;
        this.READY_TO_RECEIVE= 259;
        this.READY_TO_COLLECT= 260;
        this.PARTIALLY_DISPATCHED= 261;
        this.CONSIGNEE_WILL_COLLECT= 262;
        this.CONSIGNEE_REQUESTED_TO_DELIVER= 265;
        this.PAYMENT_CONFIRMATION_AWAITED=269;
        this.SHIPMENT_ON_HOLD=270;
        this.TRUCK_ARRIVED=274;
        this.PAYMENT_CONFIRMED=275;
        this.RELEASED=276;
        this.ACCIDENT=277;
        this.PARTIALLY_DELIVERED=288;
    }

    this.IMANIFEST_SHIPMENT_STATUS=new function()
    {
        //Manifest Shipment Status -> '1,Manifest Prepared,2,Dispatch Prepared,3,Validated,4,Diaptched,5,Arrived,6,Delivered'
        this.MANIFEST_PREPARED=1;
        this.DISPATCH_PREPARED=2;
        this.DISPATCH_VALIDATED=3;
        this.DISPATCHED=4;
        this.ARRIVED=5;
        this.DELIVERED=6;
    }

    this.IDISPATCH_STATUS=new function()
    {
        ///1,prepared,2,validated,3,closed
        this.DISPATCH_PREPARED=1;
        this.VALIDATED=2;
        this.CLOSED=3;
    }
    this.IARRIVAL_STATUS=new function()
    {
        ///1,prepared,2,validated
        this.ARRIVAL_PREPARED=1;
        this.VALIDATED=2;
    }
    this.IDELIVERY_STATUS=new function()
    {
        ///
        this.PENDING=1;
        this.DELIVERY_ASSIGNED=2;
        this.VALIDATED=3;    // BY CHECKER
        this.CONFIRM=4;    // BY DELIVERY EXECUTIVE
        this.DAMAGED=5;
        //            public static final short ON_THE_WAY_TO_DELIVERY=6;
        this.RETURNED_TO_WAREHOUSE=6;
        this.DELIVERED=7;
        this.CLOSED=8;
    };
    this.IBARCODE_SCAN_STATUS=new function()
    {
       this.PENDING=1;
       this.SCANNED=2;
    }
};

var ISuppportConstants = new function()
{
    this.IGENERAL=new function()
    {
        this.WORKLOG_DURATION_BASED_ON_START_END_TIME = 6;
    };
    this.ICHEQUE_STATUS=new function()
    {
        this.NOT_CLEARED=157;
        this.CLEARED=158;
        this.RETURN=159;
        this.HOLD=160;
        this.RETURN_ON_SETTLEMENT=161;
    };
};

var IEDUConstants = new function()
{
    this.IEnQuiryStatus = new function()
    {
       this.NEW=1;
       this.CONVERTED_TO_APPLICATION=2;
    };

    this.IApplicationStatus = new function()
    {
        this.NEW=1;
        this.ACCEPTED=2;
        this.REJECTED=3;
        this.ADMISSION_INCOMPLETE=4;
        this.ADMITTED=5;
    };
};


