// To parse this data:
//
//   import { Convert, Pipeline } from "./file";
//
//   const pipeline = Convert.toPipeline(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Pipeline {
    customdata?:                        { [key: string]: any } | null;
    defaultdocumentsavestrategy?:       null | DocumentSaveStrategy;
    defaultstoresettingscontentserver?: null | StoreSettingsContentServer;
    defaultstoresettingsnats?:          null | StoreSettingsNATS;
    defaultstoresettingss3?:            null | StoreSettingsS3;
    defaultstoresettingssharepoint?:    null | StoreSettingsSharepoint;
    dum?:                               null | Dum;
    id?:                                null | string;
    inputs?:                            null | Artifact;
    merge?:                             boolean;
    mergesettings?:                     null | SettingsMerge;
    metadata?:                          null | string;
    output?:                            null | Artifact;
    pipelinesettings?:                  null | SettingsPipeline;
    postprocess?:                       Array<null | DocBuilder> | null;
    processors?:                        Array<null | DocBuilder> | null;
    signatures?:                        Array<null | Signature> | null;
    workflowtype?:                      Workflowtype;
    [property: string]: any;
}

export interface DocumentSaveStrategy {
    keepfolderstructure?:      boolean;
    namingpattern?:            null | string;
    overwrite?:                boolean;
    replaceoriginalextension?: boolean;
    samefolderasoriginal?:     boolean;
    serverside?:               boolean;
    [property: string]: any;
}

export interface StoreSettingsContentServer {
    convertfilenamestocstags?: boolean;
    httptimeout?:              number;
    password?:                 null | string;
    sessiontimeout?:           number;
    tlsversion?:               Tlsversion;
    url?:                      null | string;
    userlogin?:                null | string;
    [property: string]: any;
}

export enum Tlsversion {
    Ssl3 = "Ssl3",
    SystemDefault = "SystemDefault",
    TLS = "Tls",
    Tls11 = "Tls11",
    Tls12 = "Tls12",
    Tls13 = "Tls13",
}

export interface StoreSettingsNATS {
    inmemory?:   boolean;
    privatekey?: null | string;
    publickey?:  null | string;
    servername?: null | string;
    url?:        null | string;
    [property: string]: any;
}

export interface StoreSettingsS3 {
    accesskey?: null | string;
    region?:    null | string;
    secretkey?: null | string;
    url?:       null | string;
    usessl?:    boolean;
    [property: string]: any;
}

export interface StoreSettingsSharepoint {
    chunksize?:    number;
    clientid?:     null | string;
    clientsecret?: null | string;
    siteurl?:      null | string;
    [property: string]: any;
}

export interface Dum {
    pipelinestatus?: null | PipelineStatus;
    taskdef?:        null | TaskDef;
    wfrun?:          null | WorkflowRun;
    [property: string]: any;
}

export interface PipelineStatus {
    customdata?: { [key: string]: any } | null;
    id?:         null | string;
    output?:     null | Artifact;
    runid?:      null | string;
    statusinfo?: null | StatusInfo;
    [property: string]: any;
}

export interface Artifact {
    asset?:      null | Asset;
    children?:   Array<null | Artifact> | null;
    clientinfo?: null | ClientInformation;
    id?:         null | string;
    level?:      number;
    metadata?:   null | string;
    ordering?:   number;
    pplid?:      null | string;
    split?:      boolean;
    statusinfo?: null | StatusInfo;
    [property: string]: any;
}

export interface Asset {
    artifactcs?:         null | ArtifactCS;
    artifactfs?:         null | ArtifactFS;
    artifactnats?:       null | ArtifactNATS;
    artifacts3?:         null | ArtifactS3;
    artifactsharepoint?: null | ArtifactSharepoint;
    id?:                 null | string;
    mimetype?:           null | string;
    name?:               null | string;
    shouldbeprocessed?:  boolean;
    storetype?:          Storetype;
    [property: string]: any;
}

export interface ArtifactCS {
    dataid?:                     number;
    mimetype?:                   null | string;
    name?:                       null | string;
    parentid?:                   number;
    storesettingscontentserver?: null | StoreSettingsContentServer;
    subtype?:                    number;
    vernum?:                     number;
    [property: string]: any;
}

export interface ArtifactFS {
    fullname?: null | string;
    [property: string]: any;
}

export interface ArtifactNATS {
    bucket?:            null | string;
    natsid?:            null | string;
    storesettingsnats?: null | StoreSettingsNATS;
    [property: string]: any;
}

export interface ArtifactS3 {
    bucket?:          null | string;
    s3id?:            null | string;
    storesettingss3?: null | StoreSettingsS3;
    [property: string]: any;
}

export interface ArtifactSharepoint {
    sharepointid?:            null | string;
    storesettingssharepoint?: null | StoreSettingsSharepoint;
    [property: string]: any;
}

export enum Storetype {
    Contentserver = "contentserver",
    FS = "fs",
    FTP = "ftp",
    Nats = "nats",
    None = "none",
    S3 = "s3",
    Sharepoint = "sharepoint",
    URL = "url",
}

export interface ClientInformation {
    fullname?: null | string;
    /**
     * Unique identifier for the client or source item.
     */
    id?:          null | string;
    iscontainer?: boolean;
    metadata?:    null | string;
    mimetype?:    null | string;
    parentid?:    null | string;
    recursive?:   boolean;
    shortname?:   null | string;
    [property: string]: any;
}

export interface StatusInfo {
    datasize?:     number;
    errordetails?: Array<null | string> | null;
    status?:       Status;
    statusmsg?:    null | string;
    timing?:       number;
    [property: string]: any;
}

export enum Status {
    Canceled = "Canceled",
    Canceling = "Canceling",
    Completed = "Completed",
    Errored = "Errored",
    Pending = "Pending",
    Processing = "Processing",
    Unchanged = "Unchanged",
}

export interface TaskDef {
    builder?:      null | DocBuilder;
    id?:           null | string;
    input?:        null | Artifact;
    output?:       null | Artifact;
    pplid?:        null | string;
    runid?:        null | string;
    statusinfo?:   null | StatusInfo;
    tasktype?:     Tasktype;
    workflowtype?: Workflowtype;
    [property: string]: any;
}

export interface DocBuilder {
    actioncompress?:             boolean;
    actionconvert?:              boolean;
    actiondeletewatermark?:      boolean;
    actionflattensignatures?:    boolean;
    actionmapproperties?:        boolean;
    actionmerge?:                boolean;
    actionmergeheaderfooter?:    boolean;
    actionmergemeta?:            boolean;
    actionocr?:                  boolean;
    actionsecurepdf?:            boolean;
    actionsign?:                 boolean;
    actionsplit?:                boolean;
    actionwatermark?:            boolean;
    extensionsfilter?:           Array<null | string> | null;
    settingscad?:                null | SettingsCAD;
    settingsconvert?:            null | SettingsConvert;
    settingsdeletewatermarks?:   Array<null | string> | null;
    settingsemaildocument?:      null | SettingsEMailDocument;
    settingshtml?:               null | SettingsHTML;
    settingsmergeheaderfooters?: null | SettingsMergeHeaderFooters;
    settingsmergemeta?:          null | SettingsMergeMeta;
    settingsocr?:                null | SettingsOCR;
    settingspagesetup?:          null | SettingsPageSetup;
    settingspdf?:                null | SettingsPDF;
    settingspropmappings?:       null | SettingsPropMappings;
    settingssignature?:          null | Signature;
    settingswatermarks?:         Array<null | Watermark> | null;
    settingsword?:               null | SettingsWord;
    [property: string]: any;
}

export interface SettingsCAD {
    cadbgcolor?:         null | string;
    cadblackwhite?:      boolean;
    cadforcelineweight?: number;
    [property: string]: any;
}

export interface SettingsConvert {
    saveformat?: Saveformat;
    [property: string]: any;
}

export enum Saveformat {
    Doc = "doc",
    Docx = "docx",
    GIF = "gif",
    HTML = "html",
    JPEG = "jpeg",
    Mhtml = "mhtml",
    PDF = "pdf",
    PNG = "png",
    Ppt = "ppt",
    Pptx = "pptx",
    Text = "text",
    Tiff = "tiff",
    Xls = "xls",
    Xlsx = "xlsx",
}

export interface SettingsEMailDocument {
    attachmentseparator?:                null | Artifact;
    excludedemailattachmentsextensions?: Array<null | string> | null;
    removeextensionsfrombookmarks?:      boolean;
    [property: string]: any;
}

export interface SettingsHTML {
    additionalmarginwidth?: number;
    border?:                number;
    extprefix?:             null | string;
    saveassinglefile?:      boolean;
    splitpages?:            boolean;
    zipoutput?:             boolean;
    [property: string]: any;
}

export interface SettingsMergeHeaderFooters {
    appendheaders?:   boolean;
    appenfooters?:    boolean;
    footersdocument?: null | Artifact;
    headersdocument?: null | Artifact;
    [property: string]: any;
}

export interface SettingsMergeMeta {
    mergenullorempty?:     boolean;
    removeemptylines?:     boolean;
    usestrictreplacement?: boolean;
    wordtrackchanges?:     boolean;
    [property: string]: any;
}

export interface SettingsOCR {
    autorotateimages?: boolean;
    checknotextonly?:  boolean;
    downscalefactor?:  number;
    ocrdevice?:        Ocrdevice;
    resolution?:       number;
    [property: string]: any;
}

export enum Ocrdevice {
    Pdfocr24 = "pdfocr24",
    Pdfocr32 = "pdfocr32",
    Pdfocr8 = "pdfocr8",
}

export interface SettingsPageSetup {
    forcepagesetup?: boolean;
    height?:         number;
    marginbottom?:   number;
    marginleft?:     number;
    marginright?:    number;
    margintop?:      number;
    orientation?:    Orientation;
    papersize?:      Papersize;
    width?:          number;
    [property: string]: any;
}

export enum Orientation {
    Landscape = "Landscape",
    Portrait = "Portrait",
}

export enum Papersize {
    A0 = "a0",
    A1 = "a1",
    A2 = "a2",
    A3 = "a3",
    A4 = "a4",
    A5 = "a5",
    B4 = "b4",
    B5 = "b5",
    Custom = "custom",
    Envelope = "envelope",
    Executive = "executive",
    Folio = "folio",
    Ledger = "ledger",
    Legal = "legal",
    Letter = "letter",
    P10X14 = "p10x14",
    Quarto = "quarto",
    Statement = "statement",
    Tabloid = "tabloid",
}

export interface SettingsPDF {
    baseurl?:                 null | string;
    bookmarkmergeddocs?:      boolean;
    bookmarksoutlinelevel?:   number;
    cbcustomtext?:            null | string;
    createbookmarksfromword?: boolean;
    embedfullfonts?:          boolean;
    expandedoutlinelevels?:   number;
    flattenpdf?:              boolean;
    greylevels?:              boolean;
    headingsoutlinelevels?:   boolean;
    inheritzoom?:             boolean;
    initialmagnification?:    Initialmagnification;
    initialpagelayout?:       Initialpagelayout;
    openbookmarks?:           boolean;
    optimizeforweb?:          boolean;
    passwords?:               Array<null | string> | null;
    pdfformat?:               Pdfformat;
    settingspdfcompression?:  null | SettingsPDFCompression;
    settingspdfsecurity?:     null | SettingsPDFSecurity;
    [property: string]: any;
}

export enum Initialmagnification {
    Default = "Default",
    FitHeight = "FitHeight",
    FitPage = "FitPage",
    FitVisible = "FitVisible",
    FitWidth = "FitWidth",
    Pct100 = "pct100",
    Pct125 = "pct125",
    Pct150 = "pct150",
    Pct1600 = "pct1600",
    Pct200 = "pct200",
    Pct25 = "pct25",
    Pct3200 = "pct3200",
    Pct400 = "pct400",
    Pct50 = "pct50",
    Pct6400 = "pct6400",
    Pct75 = "pct75",
    Pct800 = "pct800",
}

export enum Initialpagelayout {
    Default = "Default",
    OneColumn = "OneColumn",
    SinglePage = "SinglePage",
    TwoColumnLeft = "TwoColumnLeft",
    TwoColumnRight = "TwoColumnRight",
    TwoPageLeft = "TwoPageLeft",
    TwoPageRight = "TwoPageRight",
}

export enum Pdfformat {
    PDFA1A = "PDF_A_1A",
    PDFA1B = "PDF_A_1B",
    PDFA2A = "PDF_A_2A",
    PDFA2B = "PDF_A_2B",
    PDFA2U = "PDF_A_2U",
    PDFA3A = "PDF_A_3A",
    PDFA3B = "PDF_A_3B",
    PDFA3U = "PDF_A_3U",
    PDFUa1 = "PDF_UA_1",
    PDFX1A = "PDF_X_1A",
    PDFX1A2001 = "PDF_X_1A_2001",
    PDFX3 = "PDF_X_3",
    V1_0 = "v_1_0",
    V1_1 = "v_1_1",
    V1_2 = "v_1_2",
    V1_3 = "v_1_3",
    V1_4 = "v_1_4",
    V1_5 = "v_1_5",
    V1_6 = "v_1_6",
    V1_7 = "v_1_7",
    V2_0 = "v_2_0",
    ZUGFeRD = "ZUGFeRD",
}

export interface SettingsPDFCompression {
    compress?:    boolean;
    downsample?:  number;
    jpegquality?: number;
    [property: string]: any;
}

export interface SettingsPDFSecurity {
    cryptoalgorithm?:   Cryptoalgorithm;
    documentprivilege?: null | DocumentPrivilege;
    ownerpassword?:     null | string;
    usepdf20?:          boolean;
    userpassword?:      null | string;
    [property: string]: any;
}

export enum Cryptoalgorithm {
    AESx128 = "AESx128",
    AESx256 = "AESx256",
    RC4X128 = "RC4x128",
    RC4X40 = "RC4x40",
}

export interface DocumentPrivilege {
    allowassembly?:          boolean;
    allowcopy?:              boolean;
    allowdegradedprinting?:  boolean;
    allowfillin?:            boolean;
    allowmodifyannotations?: boolean;
    allowmodifycontents?:    boolean;
    allowprint?:             boolean;
    allowscreenreaders?:     boolean;
    changeallowlevel?:       Changeallowlevel;
    copyallowlevel?:         Copyallowlevel;
    printallowlevel?:        Printallowlevel;
    [property: string]: any;
}

export enum Changeallowlevel {
    AnyExceptExtract = "AnyExceptExtract",
    CommentingFillingInFormfieldsAndSignExistingSignatureFields = "CommentingFillingInFormfieldsAndSignExistingSignatureFields",
    FillingInFormfieldsAndSignExistingSignatureFields = "FillingInFormfieldsAndSignExistingSignatureFields",
    InsertingDeletingRotatingPages = "InsertingDeletingRotatingPages",
    None = "None",
}

export enum Copyallowlevel {
    EnableCopyingOfTextImagesAndOtherContent = "EnableCopyingOfTextImagesAndOtherContent",
    EnableTextAccessForScreenReaderDevicesForTheVisuallyImpaired = "EnableTextAccessForScreenReaderDevicesForTheVisuallyImpaired",
    None = "None",
}

export enum Printallowlevel {
    HighResolution = "HighResolution",
    LowResolution150DPI = "LowResolution150Dpi",
    None = "None",
}

export interface SettingsPropMappings {
    convertutf8?:   boolean;
    mapfields?:     null | string;
    mapproperties?: null | string;
    [property: string]: any;
}

export interface Signature {
    height?:            number;
    numsigns?:          number;
    pageno?:            number;
    pdfownerpassword?:  null | string;
    settingssignature?: null | SettingsSignature;
    sign_comment?:      null | string;
    sign_date?:         Date;
    signinguser?:       null | SignUser;
    signinguserbehalf?: null | SignUser;
    wfholders?:         Array<null | Signature> | null;
    width?:             number;
    wsid?:              null | string;
    x?:                 number;
    y?:                 number;
    [property: string]: any;
}

export interface SettingsSignature {
    appendpageifneeded?: boolean;
    certificationlevel?: Certificationlevel;
    font?:               null | string;
    fontrtol?:           boolean;
    fontsize?:           number;
    height?:             number;
    horizontalalign?:    Horizontalalign;
    pagemarginbottom?:   number;
    pagemarginleft?:     number;
    pagemarginright?:    number;
    pagemargintop?:      number;
    showcontact?:        boolean;
    showdept?:           boolean;
    showfunction?:       boolean;
    showlocation?:       boolean;
    showreason?:         boolean;
    showsigndate?:       boolean;
    showtitle?:          boolean;
    signatureimage?:     boolean;
    signaturemarginh?:   number;
    signaturemarginv?:   number;
    signatureprovider?:  null | string;
    signdateformat?:     null | string;
    signlastpage?:       boolean;
    signpagenumber?:     number;
    textjustify?:        Horizontalalign;
    textpositionv?:      Textpositionv;
    twofactorsprovider?: null | string;
    verticalalign?:      Textpositionv;
    width?:              number;
    x?:                  number;
    y?:                  number;
    [property: string]: any;
}

export enum Certificationlevel {
    CertifiedFormFilling = "CERTIFIED_FORM_FILLING",
    CertifiedFormFillingAndAnnotations = "CERTIFIED_FORM_FILLING_AND_ANNOTATIONS",
    CertifiedNoChangesAllowed = "CERTIFIED_NO_CHANGES_ALLOWED",
    NotCertified = "NOT_CERTIFIED",
}

export enum Horizontalalign {
    Center = "center",
    Left = "left",
    Right = "right",
}

export enum Textpositionv {
    Bottom = "bottom",
    Center = "center",
    Top = "top",
}

export interface SignUser {
    department?:    null | string;
    email?:         null | string;
    firstname?:     null | string;
    initials?:      null | string;
    lastname?:      null | string;
    location?:      null | string;
    otp?:           null | string;
    sign_password?: null | string;
    timezone?:      number;
    title?:         null | string;
    [property: string]: any;
}

export interface Watermark {
    barcodetype?:               Barcodetype;
    barcodezoom?:               number;
    border?:                    number;
    borderadius?:               number;
    color?:                     null | string;
    displaybarcodetext?:        boolean;
    fontbold?:                  boolean;
    fontfamily?:                Fontfamily;
    fontitalic?:                boolean;
    fontsize?:                  number;
    height?:                    number;
    horizontalalign?:           Horizontalalign;
    image?:                     null | Artifact;
    layername?:                 null | string;
    opacity?:                   number;
    rotation?:                  number;
    text?:                      null | string;
    texthorizontalalign?:       Horizontalalign;
    textmargin?:                number;
    textverticalposition?:      Textpositionv;
    transparentbackground?:     boolean;
    underlayout?:               boolean;
    verticalalign?:             Textpositionv;
    watermarkfrompage?:         null | string;
    watermarkmarginhorizontal?: number;
    watermarkmarginvertical?:   number;
    watermarkon?:               Watermarkon;
    watermarktopage?:           null | string;
    watermarktype?:             Watermarktype;
    width?:                     number;
    [property: string]: any;
}

export enum Barcodetype {
    AustraliaPost = "AustraliaPost",
    AustralianPosteParcel = "AustralianPosteParcel",
    Aztec = "Aztec",
    Codabar = "Codabar",
    CodablockF = "CodablockF",
    Code11 = "Code11",
    Code128 = "Code128",
    Code16K = "Code16K",
    Code32 = "Code32",
    Code39Extended = "Code39Extended",
    Code39Standard = "Code39Standard",
    Code93Extended = "Code93Extended",
    Code93Standard = "Code93Standard",
    DataLogic2Of5 = "DataLogic2of5",
    DataMatrix = "DataMatrix",
    DatabarExpanded = "DatabarExpanded",
    DatabarExpandedStacked = "DatabarExpandedStacked",
    DatabarLimited = "DatabarLimited",
    DatabarOmniDirectional = "DatabarOmniDirectional",
    DatabarStacked = "DatabarStacked",
    DatabarStackedOmniDirectional = "DatabarStackedOmniDirectional",
    DatabarTruncated = "DatabarTruncated",
    DeutschePostIdentcode = "DeutschePostIdentcode",
    DeutschePostLeitcode = "DeutschePostLeitcode",
    DotCode = "DotCode",
    DutchKIX = "DutchKIX",
    Ean13 = "EAN13",
    Ean14 = "EAN14",
    Ean8 = "EAN8",
    GS1CodablockF = "GS1CodablockF",
    GS1Code128 = "GS1Code128",
    GS1DataMatrix = "GS1DataMatrix",
    Gs1Qr = "GS1QR",
    IATA2Of5 = "IATA2of5",
    Interleaved2Of5 = "Interleaved2of5",
    Isbn = "ISBN",
    Ismn = "ISMN",
    Issn = "ISSN",
    ItalianPost25 = "ItalianPost25",
    Itf14 = "ITF14",
    Itf6 = "ITF6",
    MSI = "MSI",
    MacroPdf417 = "MacroPdf417",
    Mailmark = "Mailmark",
    Matrix2Of5 = "Matrix2of5",
    MaxiCode = "MaxiCode",
    MicroPdf417 = "MicroPdf417",
    None = "None",
    OneCode = "OneCode",
    Opc = "OPC",
    PatchCode = "PatchCode",
    Pdf417 = "Pdf417",
    Pharmacode = "Pharmacode",
    Planet = "Planet",
    Postnet = "Postnet",
    Pzn = "PZN",
    Qr = "QR",
    Rm4Scc = "RM4SCC",
    Scc14 = "SCC14",
    SingaporePost = "SingaporePost",
    Sscc18 = "SSCC18",
    Standard2Of5 = "Standard2of5",
    SwissPostParcel = "SwissPostParcel",
    Upca = "UPCA",
    UpcaGs1Code128Coupon = "UpcaGs1Code128Coupon",
    UpcaGs1DatabarCoupon = "UpcaGs1DatabarCoupon",
    Upce = "UPCE",
    Vin = "VIN",
}

export enum Fontfamily {
    Courier = "COURIER",
    Helvetica = "HELVETICA",
    Symbol = "SYMBOL",
    TimesRoman = "TIMES_ROMAN",
    Undefined = "UNDEFINED",
    Zapfdingbats = "ZAPFDINGBATS",
}

export enum Watermarkon {
    Watermarkallpages = "watermarkallpages",
    Watermarkfirstpage = "watermarkfirstpage",
    Watermarklastpage = "watermarklastpage",
}

export enum Watermarktype {
    Image = "Image",
    Qrcode = "Qrcode",
    Staticimage = "Staticimage",
    Text = "Text",
}

export interface SettingsWord {
    acceptrevisions?:      boolean;
    deletecomments?:       boolean;
    disabletrackchanges?:  boolean;
    inlineimagewithtext?:  boolean;
    lockedfields?:         null | string;
    lockselectedfields?:   boolean;
    removemacros?:         boolean;
    selectedfields?:       null | string;
    splitsections?:        boolean;
    trackchanges?:         boolean;
    updateallfields?:      boolean;
    updatepagelayout?:     boolean;
    updateselectedfields?: boolean;
    updatesummaries?:      boolean;
    [property: string]: any;
}

export enum Tasktype {
    Load = "Load",
    Merge = "Merge",
    Ocr = "Ocr",
    Postprocess = "Postprocess",
    Preprocess = "Preprocess",
    Sign = "Sign",
    Upload = "Upload",
}

export enum Workflowtype {
    Ocr = "Ocr",
    PDFBook = "PdfBook",
    Print = "Print",
    Standard = "Standard",
    WordBook = "WordBook",
}

export interface WorkflowRun {
    id?:    null | string;
    pplid?: null | string;
    [property: string]: any;
}

export interface SettingsMerge {
    intermediatepage?:  null | Artifact;
    namingpattern?:     null | string;
    saveformat?:        Saveformat;
    settingswordmerge?: null | SettingsWordMerge;
    [property: string]: any;
}

export interface SettingsWordMerge {
    columnset?:                       Columnset;
    endpagesectionstart?:             Sectionstart;
    inheritpagesetup?:                boolean;
    linebetweencols?:                 boolean;
    mergetrackchanges?:               boolean;
    mergetrackchangescharacterlevel?: boolean;
    sectionstart?:                    Sectionstart;
    [property: string]: any;
}

export enum Columnset {
    None = "none",
    Twocols = "twocols",
}

export enum Sectionstart {
    Continuous = "Continuous",
    EvenPage = "EvenPage",
    NewColumn = "NewColumn",
    NewPage = "NewPage",
    OddPage = "OddPage",
}

export interface SettingsPipeline {
    continueonerror?:             boolean;
    deleteoriginalonsuccess?:     boolean;
    ignoreunknownfileextensions?: boolean;
    [property: string]: any;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPipeline(json: string): Pipeline {
        return cast(JSON.parse(json), r("Pipeline"));
    }

    public static pipelineToJson(value: Pipeline): string {
        return JSON.stringify(uncast(value, r("Pipeline")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Pipeline": o([
        { json: "customdata", js: "customdata", typ: u(undefined, u(m("any"), null)) },
        { json: "defaultdocumentsavestrategy", js: "defaultdocumentsavestrategy", typ: u(undefined, u(null, r("DocumentSaveStrategy"))) },
        { json: "defaultstoresettingscontentserver", js: "defaultstoresettingscontentserver", typ: u(undefined, u(null, r("StoreSettingsContentServer"))) },
        { json: "defaultstoresettingsnats", js: "defaultstoresettingsnats", typ: u(undefined, u(null, r("StoreSettingsNATS"))) },
        { json: "defaultstoresettingss3", js: "defaultstoresettingss3", typ: u(undefined, u(null, r("StoreSettingsS3"))) },
        { json: "defaultstoresettingssharepoint", js: "defaultstoresettingssharepoint", typ: u(undefined, u(null, r("StoreSettingsSharepoint"))) },
        { json: "dum", js: "dum", typ: u(undefined, u(null, r("Dum"))) },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "inputs", js: "inputs", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "merge", js: "merge", typ: u(undefined, true) },
        { json: "mergesettings", js: "mergesettings", typ: u(undefined, u(null, r("SettingsMerge"))) },
        { json: "metadata", js: "metadata", typ: u(undefined, u(null, "")) },
        { json: "output", js: "output", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "pipelinesettings", js: "pipelinesettings", typ: u(undefined, u(null, r("SettingsPipeline"))) },
        { json: "postprocess", js: "postprocess", typ: u(undefined, u(a(u(null, r("DocBuilder"))), null)) },
        { json: "processors", js: "processors", typ: u(undefined, u(a(u(null, r("DocBuilder"))), null)) },
        { json: "signatures", js: "signatures", typ: u(undefined, u(a(u(null, r("Signature"))), null)) },
        { json: "workflowtype", js: "workflowtype", typ: u(undefined, r("Workflowtype")) },
    ], "any"),
    "DocumentSaveStrategy": o([
        { json: "keepfolderstructure", js: "keepfolderstructure", typ: u(undefined, true) },
        { json: "namingpattern", js: "namingpattern", typ: u(undefined, u(null, "")) },
        { json: "overwrite", js: "overwrite", typ: u(undefined, true) },
        { json: "replaceoriginalextension", js: "replaceoriginalextension", typ: u(undefined, true) },
        { json: "samefolderasoriginal", js: "samefolderasoriginal", typ: u(undefined, true) },
        { json: "serverside", js: "serverside", typ: u(undefined, true) },
    ], "any"),
    "StoreSettingsContentServer": o([
        { json: "convertfilenamestocstags", js: "convertfilenamestocstags", typ: u(undefined, true) },
        { json: "httptimeout", js: "httptimeout", typ: u(undefined, 0) },
        { json: "password", js: "password", typ: u(undefined, u(null, "")) },
        { json: "sessiontimeout", js: "sessiontimeout", typ: u(undefined, 0) },
        { json: "tlsversion", js: "tlsversion", typ: u(undefined, r("Tlsversion")) },
        { json: "url", js: "url", typ: u(undefined, u(null, "")) },
        { json: "userlogin", js: "userlogin", typ: u(undefined, u(null, "")) },
    ], "any"),
    "StoreSettingsNATS": o([
        { json: "inmemory", js: "inmemory", typ: u(undefined, true) },
        { json: "privatekey", js: "privatekey", typ: u(undefined, u(null, "")) },
        { json: "publickey", js: "publickey", typ: u(undefined, u(null, "")) },
        { json: "servername", js: "servername", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: u(undefined, u(null, "")) },
    ], "any"),
    "StoreSettingsS3": o([
        { json: "accesskey", js: "accesskey", typ: u(undefined, u(null, "")) },
        { json: "region", js: "region", typ: u(undefined, u(null, "")) },
        { json: "secretkey", js: "secretkey", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: u(undefined, u(null, "")) },
        { json: "usessl", js: "usessl", typ: u(undefined, true) },
    ], "any"),
    "StoreSettingsSharepoint": o([
        { json: "chunksize", js: "chunksize", typ: u(undefined, 0) },
        { json: "clientid", js: "clientid", typ: u(undefined, u(null, "")) },
        { json: "clientsecret", js: "clientsecret", typ: u(undefined, u(null, "")) },
        { json: "siteurl", js: "siteurl", typ: u(undefined, u(null, "")) },
    ], "any"),
    "Dum": o([
        { json: "pipelinestatus", js: "pipelinestatus", typ: u(undefined, u(null, r("PipelineStatus"))) },
        { json: "taskdef", js: "taskdef", typ: u(undefined, u(null, r("TaskDef"))) },
        { json: "wfrun", js: "wfrun", typ: u(undefined, u(null, r("WorkflowRun"))) },
    ], "any"),
    "PipelineStatus": o([
        { json: "customdata", js: "customdata", typ: u(undefined, u(m("any"), null)) },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "output", js: "output", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "runid", js: "runid", typ: u(undefined, u(null, "")) },
        { json: "statusinfo", js: "statusinfo", typ: u(undefined, u(null, r("StatusInfo"))) },
    ], "any"),
    "Artifact": o([
        { json: "asset", js: "asset", typ: u(undefined, u(null, r("Asset"))) },
        { json: "children", js: "children", typ: u(undefined, u(a(u(null, r("Artifact"))), null)) },
        { json: "clientinfo", js: "clientinfo", typ: u(undefined, u(null, r("ClientInformation"))) },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "level", js: "level", typ: u(undefined, 0) },
        { json: "metadata", js: "metadata", typ: u(undefined, u(null, "")) },
        { json: "ordering", js: "ordering", typ: u(undefined, 0) },
        { json: "pplid", js: "pplid", typ: u(undefined, u(null, "")) },
        { json: "split", js: "split", typ: u(undefined, true) },
        { json: "statusinfo", js: "statusinfo", typ: u(undefined, u(null, r("StatusInfo"))) },
    ], "any"),
    "Asset": o([
        { json: "artifactcs", js: "artifactcs", typ: u(undefined, u(null, r("ArtifactCS"))) },
        { json: "artifactfs", js: "artifactfs", typ: u(undefined, u(null, r("ArtifactFS"))) },
        { json: "artifactnats", js: "artifactnats", typ: u(undefined, u(null, r("ArtifactNATS"))) },
        { json: "artifacts3", js: "artifacts3", typ: u(undefined, u(null, r("ArtifactS3"))) },
        { json: "artifactsharepoint", js: "artifactsharepoint", typ: u(undefined, u(null, r("ArtifactSharepoint"))) },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "mimetype", js: "mimetype", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: u(undefined, u(null, "")) },
        { json: "shouldbeprocessed", js: "shouldbeprocessed", typ: u(undefined, true) },
        { json: "storetype", js: "storetype", typ: u(undefined, r("Storetype")) },
    ], "any"),
    "ArtifactCS": o([
        { json: "dataid", js: "dataid", typ: u(undefined, 0) },
        { json: "mimetype", js: "mimetype", typ: u(undefined, u(null, "")) },
        { json: "name", js: "name", typ: u(undefined, u(null, "")) },
        { json: "parentid", js: "parentid", typ: u(undefined, 0) },
        { json: "storesettingscontentserver", js: "storesettingscontentserver", typ: u(undefined, u(null, r("StoreSettingsContentServer"))) },
        { json: "subtype", js: "subtype", typ: u(undefined, 0) },
        { json: "vernum", js: "vernum", typ: u(undefined, 0) },
    ], "any"),
    "ArtifactFS": o([
        { json: "fullname", js: "fullname", typ: u(undefined, u(null, "")) },
    ], "any"),
    "ArtifactNATS": o([
        { json: "bucket", js: "bucket", typ: u(undefined, u(null, "")) },
        { json: "natsid", js: "natsid", typ: u(undefined, u(null, "")) },
        { json: "storesettingsnats", js: "storesettingsnats", typ: u(undefined, u(null, r("StoreSettingsNATS"))) },
    ], "any"),
    "ArtifactS3": o([
        { json: "bucket", js: "bucket", typ: u(undefined, u(null, "")) },
        { json: "s3id", js: "s3id", typ: u(undefined, u(null, "")) },
        { json: "storesettingss3", js: "storesettingss3", typ: u(undefined, u(null, r("StoreSettingsS3"))) },
    ], "any"),
    "ArtifactSharepoint": o([
        { json: "sharepointid", js: "sharepointid", typ: u(undefined, u(null, "")) },
        { json: "storesettingssharepoint", js: "storesettingssharepoint", typ: u(undefined, u(null, r("StoreSettingsSharepoint"))) },
    ], "any"),
    "ClientInformation": o([
        { json: "fullname", js: "fullname", typ: u(undefined, u(null, "")) },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "iscontainer", js: "iscontainer", typ: u(undefined, true) },
        { json: "metadata", js: "metadata", typ: u(undefined, u(null, "")) },
        { json: "mimetype", js: "mimetype", typ: u(undefined, u(null, "")) },
        { json: "parentid", js: "parentid", typ: u(undefined, u(null, "")) },
        { json: "recursive", js: "recursive", typ: u(undefined, true) },
        { json: "shortname", js: "shortname", typ: u(undefined, u(null, "")) },
    ], "any"),
    "StatusInfo": o([
        { json: "datasize", js: "datasize", typ: u(undefined, 0) },
        { json: "errordetails", js: "errordetails", typ: u(undefined, u(a(u(null, "")), null)) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "statusmsg", js: "statusmsg", typ: u(undefined, u(null, "")) },
        { json: "timing", js: "timing", typ: u(undefined, 0) },
    ], "any"),
    "TaskDef": o([
        { json: "builder", js: "builder", typ: u(undefined, u(null, r("DocBuilder"))) },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "input", js: "input", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "output", js: "output", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "pplid", js: "pplid", typ: u(undefined, u(null, "")) },
        { json: "runid", js: "runid", typ: u(undefined, u(null, "")) },
        { json: "statusinfo", js: "statusinfo", typ: u(undefined, u(null, r("StatusInfo"))) },
        { json: "tasktype", js: "tasktype", typ: u(undefined, r("Tasktype")) },
        { json: "workflowtype", js: "workflowtype", typ: u(undefined, r("Workflowtype")) },
    ], "any"),
    "DocBuilder": o([
        { json: "actioncompress", js: "actioncompress", typ: u(undefined, true) },
        { json: "actionconvert", js: "actionconvert", typ: u(undefined, true) },
        { json: "actiondeletewatermark", js: "actiondeletewatermark", typ: u(undefined, true) },
        { json: "actionflattensignatures", js: "actionflattensignatures", typ: u(undefined, true) },
        { json: "actionmapproperties", js: "actionmapproperties", typ: u(undefined, true) },
        { json: "actionmerge", js: "actionmerge", typ: u(undefined, true) },
        { json: "actionmergeheaderfooter", js: "actionmergeheaderfooter", typ: u(undefined, true) },
        { json: "actionmergemeta", js: "actionmergemeta", typ: u(undefined, true) },
        { json: "actionocr", js: "actionocr", typ: u(undefined, true) },
        { json: "actionsecurepdf", js: "actionsecurepdf", typ: u(undefined, true) },
        { json: "actionsign", js: "actionsign", typ: u(undefined, true) },
        { json: "actionsplit", js: "actionsplit", typ: u(undefined, true) },
        { json: "actionwatermark", js: "actionwatermark", typ: u(undefined, true) },
        { json: "extensionsfilter", js: "extensionsfilter", typ: u(undefined, u(a(u(null, "")), null)) },
        { json: "settingscad", js: "settingscad", typ: u(undefined, u(null, r("SettingsCAD"))) },
        { json: "settingsconvert", js: "settingsconvert", typ: u(undefined, u(null, r("SettingsConvert"))) },
        { json: "settingsdeletewatermarks", js: "settingsdeletewatermarks", typ: u(undefined, u(a(u(null, "")), null)) },
        { json: "settingsemaildocument", js: "settingsemaildocument", typ: u(undefined, u(null, r("SettingsEMailDocument"))) },
        { json: "settingshtml", js: "settingshtml", typ: u(undefined, u(null, r("SettingsHTML"))) },
        { json: "settingsmergeheaderfooters", js: "settingsmergeheaderfooters", typ: u(undefined, u(null, r("SettingsMergeHeaderFooters"))) },
        { json: "settingsmergemeta", js: "settingsmergemeta", typ: u(undefined, u(null, r("SettingsMergeMeta"))) },
        { json: "settingsocr", js: "settingsocr", typ: u(undefined, u(null, r("SettingsOCR"))) },
        { json: "settingspagesetup", js: "settingspagesetup", typ: u(undefined, u(null, r("SettingsPageSetup"))) },
        { json: "settingspdf", js: "settingspdf", typ: u(undefined, u(null, r("SettingsPDF"))) },
        { json: "settingspropmappings", js: "settingspropmappings", typ: u(undefined, u(null, r("SettingsPropMappings"))) },
        { json: "settingssignature", js: "settingssignature", typ: u(undefined, u(null, r("Signature"))) },
        { json: "settingswatermarks", js: "settingswatermarks", typ: u(undefined, u(a(u(null, r("Watermark"))), null)) },
        { json: "settingsword", js: "settingsword", typ: u(undefined, u(null, r("SettingsWord"))) },
    ], "any"),
    "SettingsCAD": o([
        { json: "cadbgcolor", js: "cadbgcolor", typ: u(undefined, u(null, "")) },
        { json: "cadblackwhite", js: "cadblackwhite", typ: u(undefined, true) },
        { json: "cadforcelineweight", js: "cadforcelineweight", typ: u(undefined, 3.14) },
    ], "any"),
    "SettingsConvert": o([
        { json: "saveformat", js: "saveformat", typ: u(undefined, r("Saveformat")) },
    ], "any"),
    "SettingsEMailDocument": o([
        { json: "attachmentseparator", js: "attachmentseparator", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "excludedemailattachmentsextensions", js: "excludedemailattachmentsextensions", typ: u(undefined, u(a(u(null, "")), null)) },
        { json: "removeextensionsfrombookmarks", js: "removeextensionsfrombookmarks", typ: u(undefined, true) },
    ], "any"),
    "SettingsHTML": o([
        { json: "additionalmarginwidth", js: "additionalmarginwidth", typ: u(undefined, 0) },
        { json: "border", js: "border", typ: u(undefined, 0) },
        { json: "extprefix", js: "extprefix", typ: u(undefined, u(null, "")) },
        { json: "saveassinglefile", js: "saveassinglefile", typ: u(undefined, true) },
        { json: "splitpages", js: "splitpages", typ: u(undefined, true) },
        { json: "zipoutput", js: "zipoutput", typ: u(undefined, true) },
    ], "any"),
    "SettingsMergeHeaderFooters": o([
        { json: "appendheaders", js: "appendheaders", typ: u(undefined, true) },
        { json: "appenfooters", js: "appenfooters", typ: u(undefined, true) },
        { json: "footersdocument", js: "footersdocument", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "headersdocument", js: "headersdocument", typ: u(undefined, u(null, r("Artifact"))) },
    ], "any"),
    "SettingsMergeMeta": o([
        { json: "mergenullorempty", js: "mergenullorempty", typ: u(undefined, true) },
        { json: "removeemptylines", js: "removeemptylines", typ: u(undefined, true) },
        { json: "usestrictreplacement", js: "usestrictreplacement", typ: u(undefined, true) },
        { json: "wordtrackchanges", js: "wordtrackchanges", typ: u(undefined, true) },
    ], "any"),
    "SettingsOCR": o([
        { json: "autorotateimages", js: "autorotateimages", typ: u(undefined, true) },
        { json: "checknotextonly", js: "checknotextonly", typ: u(undefined, true) },
        { json: "downscalefactor", js: "downscalefactor", typ: u(undefined, 0) },
        { json: "ocrdevice", js: "ocrdevice", typ: u(undefined, r("Ocrdevice")) },
        { json: "resolution", js: "resolution", typ: u(undefined, 0) },
    ], "any"),
    "SettingsPageSetup": o([
        { json: "forcepagesetup", js: "forcepagesetup", typ: u(undefined, true) },
        { json: "height", js: "height", typ: u(undefined, 3.14) },
        { json: "marginbottom", js: "marginbottom", typ: u(undefined, 3.14) },
        { json: "marginleft", js: "marginleft", typ: u(undefined, 3.14) },
        { json: "marginright", js: "marginright", typ: u(undefined, 3.14) },
        { json: "margintop", js: "margintop", typ: u(undefined, 3.14) },
        { json: "orientation", js: "orientation", typ: u(undefined, r("Orientation")) },
        { json: "papersize", js: "papersize", typ: u(undefined, r("Papersize")) },
        { json: "width", js: "width", typ: u(undefined, 3.14) },
    ], "any"),
    "SettingsPDF": o([
        { json: "baseurl", js: "baseurl", typ: u(undefined, u(null, "")) },
        { json: "bookmarkmergeddocs", js: "bookmarkmergeddocs", typ: u(undefined, true) },
        { json: "bookmarksoutlinelevel", js: "bookmarksoutlinelevel", typ: u(undefined, 0) },
        { json: "cbcustomtext", js: "cbcustomtext", typ: u(undefined, u(null, "")) },
        { json: "createbookmarksfromword", js: "createbookmarksfromword", typ: u(undefined, true) },
        { json: "embedfullfonts", js: "embedfullfonts", typ: u(undefined, true) },
        { json: "expandedoutlinelevels", js: "expandedoutlinelevels", typ: u(undefined, 0) },
        { json: "flattenpdf", js: "flattenpdf", typ: u(undefined, true) },
        { json: "greylevels", js: "greylevels", typ: u(undefined, true) },
        { json: "headingsoutlinelevels", js: "headingsoutlinelevels", typ: u(undefined, true) },
        { json: "inheritzoom", js: "inheritzoom", typ: u(undefined, true) },
        { json: "initialmagnification", js: "initialmagnification", typ: u(undefined, r("Initialmagnification")) },
        { json: "initialpagelayout", js: "initialpagelayout", typ: u(undefined, r("Initialpagelayout")) },
        { json: "openbookmarks", js: "openbookmarks", typ: u(undefined, true) },
        { json: "optimizeforweb", js: "optimizeforweb", typ: u(undefined, true) },
        { json: "passwords", js: "passwords", typ: u(undefined, u(a(u(null, "")), null)) },
        { json: "pdfformat", js: "pdfformat", typ: u(undefined, r("Pdfformat")) },
        { json: "settingspdfcompression", js: "settingspdfcompression", typ: u(undefined, u(null, r("SettingsPDFCompression"))) },
        { json: "settingspdfsecurity", js: "settingspdfsecurity", typ: u(undefined, u(null, r("SettingsPDFSecurity"))) },
    ], "any"),
    "SettingsPDFCompression": o([
        { json: "compress", js: "compress", typ: u(undefined, true) },
        { json: "downsample", js: "downsample", typ: u(undefined, 0) },
        { json: "jpegquality", js: "jpegquality", typ: u(undefined, 0) },
    ], "any"),
    "SettingsPDFSecurity": o([
        { json: "cryptoalgorithm", js: "cryptoalgorithm", typ: u(undefined, r("Cryptoalgorithm")) },
        { json: "documentprivilege", js: "documentprivilege", typ: u(undefined, u(null, r("DocumentPrivilege"))) },
        { json: "ownerpassword", js: "ownerpassword", typ: u(undefined, u(null, "")) },
        { json: "usepdf20", js: "usepdf20", typ: u(undefined, true) },
        { json: "userpassword", js: "userpassword", typ: u(undefined, u(null, "")) },
    ], "any"),
    "DocumentPrivilege": o([
        { json: "allowassembly", js: "allowassembly", typ: u(undefined, true) },
        { json: "allowcopy", js: "allowcopy", typ: u(undefined, true) },
        { json: "allowdegradedprinting", js: "allowdegradedprinting", typ: u(undefined, true) },
        { json: "allowfillin", js: "allowfillin", typ: u(undefined, true) },
        { json: "allowmodifyannotations", js: "allowmodifyannotations", typ: u(undefined, true) },
        { json: "allowmodifycontents", js: "allowmodifycontents", typ: u(undefined, true) },
        { json: "allowprint", js: "allowprint", typ: u(undefined, true) },
        { json: "allowscreenreaders", js: "allowscreenreaders", typ: u(undefined, true) },
        { json: "changeallowlevel", js: "changeallowlevel", typ: u(undefined, r("Changeallowlevel")) },
        { json: "copyallowlevel", js: "copyallowlevel", typ: u(undefined, r("Copyallowlevel")) },
        { json: "printallowlevel", js: "printallowlevel", typ: u(undefined, r("Printallowlevel")) },
    ], "any"),
    "SettingsPropMappings": o([
        { json: "convertutf8", js: "convertutf8", typ: u(undefined, true) },
        { json: "mapfields", js: "mapfields", typ: u(undefined, u(null, "")) },
        { json: "mapproperties", js: "mapproperties", typ: u(undefined, u(null, "")) },
    ], "any"),
    "Signature": o([
        { json: "height", js: "height", typ: u(undefined, 0) },
        { json: "numsigns", js: "numsigns", typ: u(undefined, 0) },
        { json: "pageno", js: "pageno", typ: u(undefined, 0) },
        { json: "pdfownerpassword", js: "pdfownerpassword", typ: u(undefined, u(null, "")) },
        { json: "settingssignature", js: "settingssignature", typ: u(undefined, u(null, r("SettingsSignature"))) },
        { json: "sign_comment", js: "sign_comment", typ: u(undefined, u(null, "")) },
        { json: "sign_date", js: "sign_date", typ: u(undefined, Date) },
        { json: "signinguser", js: "signinguser", typ: u(undefined, u(null, r("SignUser"))) },
        { json: "signinguserbehalf", js: "signinguserbehalf", typ: u(undefined, u(null, r("SignUser"))) },
        { json: "wfholders", js: "wfholders", typ: u(undefined, u(a(u(null, r("Signature"))), null)) },
        { json: "width", js: "width", typ: u(undefined, 0) },
        { json: "wsid", js: "wsid", typ: u(undefined, u(null, "")) },
        { json: "x", js: "x", typ: u(undefined, 0) },
        { json: "y", js: "y", typ: u(undefined, 0) },
    ], "any"),
    "SettingsSignature": o([
        { json: "appendpageifneeded", js: "appendpageifneeded", typ: u(undefined, true) },
        { json: "certificationlevel", js: "certificationlevel", typ: u(undefined, r("Certificationlevel")) },
        { json: "font", js: "font", typ: u(undefined, u(null, "")) },
        { json: "fontrtol", js: "fontrtol", typ: u(undefined, true) },
        { json: "fontsize", js: "fontsize", typ: u(undefined, 0) },
        { json: "height", js: "height", typ: u(undefined, 0) },
        { json: "horizontalalign", js: "horizontalalign", typ: u(undefined, r("Horizontalalign")) },
        { json: "pagemarginbottom", js: "pagemarginbottom", typ: u(undefined, 0) },
        { json: "pagemarginleft", js: "pagemarginleft", typ: u(undefined, 0) },
        { json: "pagemarginright", js: "pagemarginright", typ: u(undefined, 0) },
        { json: "pagemargintop", js: "pagemargintop", typ: u(undefined, 0) },
        { json: "showcontact", js: "showcontact", typ: u(undefined, true) },
        { json: "showdept", js: "showdept", typ: u(undefined, true) },
        { json: "showfunction", js: "showfunction", typ: u(undefined, true) },
        { json: "showlocation", js: "showlocation", typ: u(undefined, true) },
        { json: "showreason", js: "showreason", typ: u(undefined, true) },
        { json: "showsigndate", js: "showsigndate", typ: u(undefined, true) },
        { json: "showtitle", js: "showtitle", typ: u(undefined, true) },
        { json: "signatureimage", js: "signatureimage", typ: u(undefined, true) },
        { json: "signaturemarginh", js: "signaturemarginh", typ: u(undefined, 0) },
        { json: "signaturemarginv", js: "signaturemarginv", typ: u(undefined, 0) },
        { json: "signatureprovider", js: "signatureprovider", typ: u(undefined, u(null, "")) },
        { json: "signdateformat", js: "signdateformat", typ: u(undefined, u(null, "")) },
        { json: "signlastpage", js: "signlastpage", typ: u(undefined, true) },
        { json: "signpagenumber", js: "signpagenumber", typ: u(undefined, 0) },
        { json: "textjustify", js: "textjustify", typ: u(undefined, r("Horizontalalign")) },
        { json: "textpositionv", js: "textpositionv", typ: u(undefined, r("Textpositionv")) },
        { json: "twofactorsprovider", js: "twofactorsprovider", typ: u(undefined, u(null, "")) },
        { json: "verticalalign", js: "verticalalign", typ: u(undefined, r("Textpositionv")) },
        { json: "width", js: "width", typ: u(undefined, 0) },
        { json: "x", js: "x", typ: u(undefined, 0) },
        { json: "y", js: "y", typ: u(undefined, 0) },
    ], "any"),
    "SignUser": o([
        { json: "department", js: "department", typ: u(undefined, u(null, "")) },
        { json: "email", js: "email", typ: u(undefined, u(null, "")) },
        { json: "firstname", js: "firstname", typ: u(undefined, u(null, "")) },
        { json: "initials", js: "initials", typ: u(undefined, u(null, "")) },
        { json: "lastname", js: "lastname", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "otp", js: "otp", typ: u(undefined, u(null, "")) },
        { json: "sign_password", js: "sign_password", typ: u(undefined, u(null, "")) },
        { json: "timezone", js: "timezone", typ: u(undefined, 0) },
        { json: "title", js: "title", typ: u(undefined, u(null, "")) },
    ], "any"),
    "Watermark": o([
        { json: "barcodetype", js: "barcodetype", typ: u(undefined, r("Barcodetype")) },
        { json: "barcodezoom", js: "barcodezoom", typ: u(undefined, 3.14) },
        { json: "border", js: "border", typ: u(undefined, 0) },
        { json: "borderadius", js: "borderadius", typ: u(undefined, 0) },
        { json: "color", js: "color", typ: u(undefined, u(null, "")) },
        { json: "displaybarcodetext", js: "displaybarcodetext", typ: u(undefined, true) },
        { json: "fontbold", js: "fontbold", typ: u(undefined, true) },
        { json: "fontfamily", js: "fontfamily", typ: u(undefined, r("Fontfamily")) },
        { json: "fontitalic", js: "fontitalic", typ: u(undefined, true) },
        { json: "fontsize", js: "fontsize", typ: u(undefined, 0) },
        { json: "height", js: "height", typ: u(undefined, 0) },
        { json: "horizontalalign", js: "horizontalalign", typ: u(undefined, r("Horizontalalign")) },
        { json: "image", js: "image", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "layername", js: "layername", typ: u(undefined, u(null, "")) },
        { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
        { json: "rotation", js: "rotation", typ: u(undefined, 0) },
        { json: "text", js: "text", typ: u(undefined, u(null, "")) },
        { json: "texthorizontalalign", js: "texthorizontalalign", typ: u(undefined, r("Horizontalalign")) },
        { json: "textmargin", js: "textmargin", typ: u(undefined, 0) },
        { json: "textverticalposition", js: "textverticalposition", typ: u(undefined, r("Textpositionv")) },
        { json: "transparentbackground", js: "transparentbackground", typ: u(undefined, true) },
        { json: "underlayout", js: "underlayout", typ: u(undefined, true) },
        { json: "verticalalign", js: "verticalalign", typ: u(undefined, r("Textpositionv")) },
        { json: "watermarkfrompage", js: "watermarkfrompage", typ: u(undefined, u(null, "")) },
        { json: "watermarkmarginhorizontal", js: "watermarkmarginhorizontal", typ: u(undefined, 0) },
        { json: "watermarkmarginvertical", js: "watermarkmarginvertical", typ: u(undefined, 0) },
        { json: "watermarkon", js: "watermarkon", typ: u(undefined, r("Watermarkon")) },
        { json: "watermarktopage", js: "watermarktopage", typ: u(undefined, u(null, "")) },
        { json: "watermarktype", js: "watermarktype", typ: u(undefined, r("Watermarktype")) },
        { json: "width", js: "width", typ: u(undefined, 0) },
    ], "any"),
    "SettingsWord": o([
        { json: "acceptrevisions", js: "acceptrevisions", typ: u(undefined, true) },
        { json: "deletecomments", js: "deletecomments", typ: u(undefined, true) },
        { json: "disabletrackchanges", js: "disabletrackchanges", typ: u(undefined, true) },
        { json: "inlineimagewithtext", js: "inlineimagewithtext", typ: u(undefined, true) },
        { json: "lockedfields", js: "lockedfields", typ: u(undefined, u(null, "")) },
        { json: "lockselectedfields", js: "lockselectedfields", typ: u(undefined, true) },
        { json: "removemacros", js: "removemacros", typ: u(undefined, true) },
        { json: "selectedfields", js: "selectedfields", typ: u(undefined, u(null, "")) },
        { json: "splitsections", js: "splitsections", typ: u(undefined, true) },
        { json: "trackchanges", js: "trackchanges", typ: u(undefined, true) },
        { json: "updateallfields", js: "updateallfields", typ: u(undefined, true) },
        { json: "updatepagelayout", js: "updatepagelayout", typ: u(undefined, true) },
        { json: "updateselectedfields", js: "updateselectedfields", typ: u(undefined, true) },
        { json: "updatesummaries", js: "updatesummaries", typ: u(undefined, true) },
    ], "any"),
    "WorkflowRun": o([
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "pplid", js: "pplid", typ: u(undefined, u(null, "")) },
    ], "any"),
    "SettingsMerge": o([
        { json: "intermediatepage", js: "intermediatepage", typ: u(undefined, u(null, r("Artifact"))) },
        { json: "namingpattern", js: "namingpattern", typ: u(undefined, u(null, "")) },
        { json: "saveformat", js: "saveformat", typ: u(undefined, r("Saveformat")) },
        { json: "settingswordmerge", js: "settingswordmerge", typ: u(undefined, u(null, r("SettingsWordMerge"))) },
    ], "any"),
    "SettingsWordMerge": o([
        { json: "columnset", js: "columnset", typ: u(undefined, r("Columnset")) },
        { json: "endpagesectionstart", js: "endpagesectionstart", typ: u(undefined, r("Sectionstart")) },
        { json: "inheritpagesetup", js: "inheritpagesetup", typ: u(undefined, true) },
        { json: "linebetweencols", js: "linebetweencols", typ: u(undefined, true) },
        { json: "mergetrackchanges", js: "mergetrackchanges", typ: u(undefined, true) },
        { json: "mergetrackchangescharacterlevel", js: "mergetrackchangescharacterlevel", typ: u(undefined, true) },
        { json: "sectionstart", js: "sectionstart", typ: u(undefined, r("Sectionstart")) },
    ], "any"),
    "SettingsPipeline": o([
        { json: "continueonerror", js: "continueonerror", typ: u(undefined, true) },
        { json: "deleteoriginalonsuccess", js: "deleteoriginalonsuccess", typ: u(undefined, true) },
        { json: "ignoreunknownfileextensions", js: "ignoreunknownfileextensions", typ: u(undefined, true) },
    ], "any"),
    "Tlsversion": [
        "Ssl3",
        "SystemDefault",
        "Tls",
        "Tls11",
        "Tls12",
        "Tls13",
    ],
    "Storetype": [
        "contentserver",
        "fs",
        "ftp",
        "nats",
        "none",
        "s3",
        "sharepoint",
        "url",
    ],
    "Status": [
        "Canceled",
        "Canceling",
        "Completed",
        "Errored",
        "Pending",
        "Processing",
        "Unchanged",
    ],
    "Saveformat": [
        "doc",
        "docx",
        "gif",
        "html",
        "jpeg",
        "mhtml",
        "pdf",
        "png",
        "ppt",
        "pptx",
        "text",
        "tiff",
        "xls",
        "xlsx",
    ],
    "Ocrdevice": [
        "pdfocr24",
        "pdfocr32",
        "pdfocr8",
    ],
    "Orientation": [
        "Landscape",
        "Portrait",
    ],
    "Papersize": [
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "b4",
        "b5",
        "custom",
        "envelope",
        "executive",
        "folio",
        "ledger",
        "legal",
        "letter",
        "p10x14",
        "quarto",
        "statement",
        "tabloid",
    ],
    "Initialmagnification": [
        "Default",
        "FitHeight",
        "FitPage",
        "FitVisible",
        "FitWidth",
        "pct100",
        "pct125",
        "pct150",
        "pct1600",
        "pct200",
        "pct25",
        "pct3200",
        "pct400",
        "pct50",
        "pct6400",
        "pct75",
        "pct800",
    ],
    "Initialpagelayout": [
        "Default",
        "OneColumn",
        "SinglePage",
        "TwoColumnLeft",
        "TwoColumnRight",
        "TwoPageLeft",
        "TwoPageRight",
    ],
    "Pdfformat": [
        "PDF_A_1A",
        "PDF_A_1B",
        "PDF_A_2A",
        "PDF_A_2B",
        "PDF_A_2U",
        "PDF_A_3A",
        "PDF_A_3B",
        "PDF_A_3U",
        "PDF_UA_1",
        "PDF_X_1A",
        "PDF_X_1A_2001",
        "PDF_X_3",
        "v_1_0",
        "v_1_1",
        "v_1_2",
        "v_1_3",
        "v_1_4",
        "v_1_5",
        "v_1_6",
        "v_1_7",
        "v_2_0",
        "ZUGFeRD",
    ],
    "Cryptoalgorithm": [
        "AESx128",
        "AESx256",
        "RC4x128",
        "RC4x40",
    ],
    "Changeallowlevel": [
        "AnyExceptExtract",
        "CommentingFillingInFormfieldsAndSignExistingSignatureFields",
        "FillingInFormfieldsAndSignExistingSignatureFields",
        "InsertingDeletingRotatingPages",
        "None",
    ],
    "Copyallowlevel": [
        "EnableCopyingOfTextImagesAndOtherContent",
        "EnableTextAccessForScreenReaderDevicesForTheVisuallyImpaired",
        "None",
    ],
    "Printallowlevel": [
        "HighResolution",
        "LowResolution150Dpi",
        "None",
    ],
    "Certificationlevel": [
        "CERTIFIED_FORM_FILLING",
        "CERTIFIED_FORM_FILLING_AND_ANNOTATIONS",
        "CERTIFIED_NO_CHANGES_ALLOWED",
        "NOT_CERTIFIED",
    ],
    "Horizontalalign": [
        "center",
        "left",
        "right",
    ],
    "Textpositionv": [
        "bottom",
        "center",
        "top",
    ],
    "Barcodetype": [
        "AustraliaPost",
        "AustralianPosteParcel",
        "Aztec",
        "Codabar",
        "CodablockF",
        "Code11",
        "Code128",
        "Code16K",
        "Code32",
        "Code39Extended",
        "Code39Standard",
        "Code93Extended",
        "Code93Standard",
        "DataLogic2of5",
        "DataMatrix",
        "DatabarExpanded",
        "DatabarExpandedStacked",
        "DatabarLimited",
        "DatabarOmniDirectional",
        "DatabarStacked",
        "DatabarStackedOmniDirectional",
        "DatabarTruncated",
        "DeutschePostIdentcode",
        "DeutschePostLeitcode",
        "DotCode",
        "DutchKIX",
        "EAN13",
        "EAN14",
        "EAN8",
        "GS1CodablockF",
        "GS1Code128",
        "GS1DataMatrix",
        "GS1QR",
        "IATA2of5",
        "Interleaved2of5",
        "ISBN",
        "ISMN",
        "ISSN",
        "ItalianPost25",
        "ITF14",
        "ITF6",
        "MSI",
        "MacroPdf417",
        "Mailmark",
        "Matrix2of5",
        "MaxiCode",
        "MicroPdf417",
        "None",
        "OneCode",
        "OPC",
        "PatchCode",
        "Pdf417",
        "Pharmacode",
        "Planet",
        "Postnet",
        "PZN",
        "QR",
        "RM4SCC",
        "SCC14",
        "SingaporePost",
        "SSCC18",
        "Standard2of5",
        "SwissPostParcel",
        "UPCA",
        "UpcaGs1Code128Coupon",
        "UpcaGs1DatabarCoupon",
        "UPCE",
        "VIN",
    ],
    "Fontfamily": [
        "COURIER",
        "HELVETICA",
        "SYMBOL",
        "TIMES_ROMAN",
        "UNDEFINED",
        "ZAPFDINGBATS",
    ],
    "Watermarkon": [
        "watermarkallpages",
        "watermarkfirstpage",
        "watermarklastpage",
    ],
    "Watermarktype": [
        "Image",
        "Qrcode",
        "Staticimage",
        "Text",
    ],
    "Tasktype": [
        "Load",
        "Merge",
        "Ocr",
        "Postprocess",
        "Preprocess",
        "Sign",
        "Upload",
    ],
    "Workflowtype": [
        "Ocr",
        "PdfBook",
        "Print",
        "Standard",
        "WordBook",
    ],
    "Columnset": [
        "none",
        "twocols",
    ],
    "Sectionstart": [
        "Continuous",
        "EvenPage",
        "NewColumn",
        "NewPage",
        "OddPage",
    ],
};
