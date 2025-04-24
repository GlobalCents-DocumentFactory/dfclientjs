import { customAlphabet } from 'nanoid';
import { Artifact, ArtifactNATS, Asset, Storetype } from '../model/model';

export class Utils {
    static getId(): string {
        const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
        const length = 21;
        const nanoid = customAlphabet(alphabet, length);
        return nanoid();
    }

  

    static GetArtifact( bucket: string,
        fileID: string,
        filename: string,
        mimetype: string): Artifact{
            const asset = Utils.GetNatsAsset( bucket, fileID, filename, mimetype);
            const result: Artifact = {
                asset,
                clientinfo:{
                    fullname: filename,
                    shortname: filename,
                    iscontainer: false,
                    mimetype,
                    recursive: false
                },
                id: fileID,

            };
            return result;

        }


    /**
       * Creates an Asset object for NATS storage.
       * @param bucket The bucket name.
       * @param fileID The file ID.
       * @param filename The file name.
       * @param mimetype The MIME type.
       * @returns Asset object.
       */
    static GetNatsAsset(
        bucket: string,
        fileID: string,
        filename: string,
        mimetype: string
    ): Asset {
        return {
            Artifactnats: {
                Bucket: bucket,
                Natsid: fileID,
            },
            Storetype: Storetype.Nats,
            Mimetype: mimetype,
            Filename: filename,
        };
    }

    static SetMonacoSchema() {
        (<any>window).monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [
                {
                    uri: "http://myschema/abi-schema.json",
                    fileMatch: ["*"],
                    schema: {
                        "definitions": {
                            "Artifact": {
                                "title": "Artifact",
                                "description": "Represents any document to be processed.",
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "pplid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "id": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "asset": {
                                        "$ref": "#/definitions/Asset"
                                    },
                                    "ordering": {
                                        "type": "integer"
                                    },
                                    "level": {
                                        "type": "integer"
                                    },
                                    "split": {
                                        "type": "boolean"
                                    },
                                    "metadata": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "children": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "$ref": "#/definitions/Artifact"
                                        }
                                    },
                                    "statusinfo": {
                                        "$ref": "#/definitions/StatusInfo"
                                    },
                                    "clientinfo": {
                                        "$ref": "#/definitions/ClientInfo"
                                    }
                                }
                            },
                            "ArtifactCS": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "storesettingscontentserver": {
                                        "$ref": "#/definitions/StoreSettingsContentServer"
                                    },
                                    "parentid": {
                                        "type": "integer"
                                    },
                                    "dataid": {
                                        "type": "integer"
                                    },
                                    "vernum": {
                                        "type": "integer"
                                    },
                                    "subtype": {
                                        "type": "integer"
                                    },
                                    "mimetype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "name": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "ArtifactFS": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "fullname": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "ArtifactNATS": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "storesettingsnats": {
                                        "$ref": "#/definitions/StoreSettingsNATS"
                                    },
                                    "natsid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "bucket": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "ArtifactS3": {
                                "title": "ArtifactS3",
                                "description": "Represents an s3 artifact.",
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "storesettingss3": {
                                        "$ref": "#/definitions/StoreSettingsS3"
                                    },
                                    "bucket": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "s3id": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "ArtifactSharepoint": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "storesettingssharepoint": {
                                        "$ref": "#/definitions/StoreSettingsSharepoint"
                                    },
                                    "sharepointid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "Asset": {
                                "title": "Asset",
                                "description": "Represents any asset.",
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "id": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "storetype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "none",
                                            "fs",
                                            "nats",
                                            "ftp",
                                            "s3",
                                            "sharepoint",
                                            "contentserver",
                                            "url"
                                        ]
                                    },
                                    "artifactcs": {
                                        "$ref": "#/definitions/ArtifactCS"
                                    },
                                    "artifactfs": {
                                        "$ref": "#/definitions/ArtifactFS"
                                    },
                                    "artifactnats": {
                                        "$ref": "#/definitions/ArtifactNATS"
                                    },
                                    "artifacts3": {
                                        "$ref": "#/definitions/ArtifactS3"
                                    },
                                    "artifactsharepoint": {
                                        "$ref": "#/definitions/ArtifactSharepoint"
                                    },
                                    "mimetype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "name": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "shouldbeprocessed": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "ClientInfo": {
                                "title": "Client Information",
                                "description": "Provides context about the client or source system requesting the operation.",
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "id": {
                                        "description": "Unique identifier for the client or source item.",
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "parentid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "mimetype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "shortname": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "fullname": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "iscontainer": {
                                        "type": "boolean"
                                    },
                                    "recursive": {
                                        "type": "boolean"
                                    },
                                    "metadata": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "DocBuilder": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "settingsemaildocument": {
                                        "$ref": "#/definitions/SettingsEMailDocument"
                                    },
                                    "settingsocr": {
                                        "$ref": "#/definitions/SettingsOCR"
                                    },
                                    "settingsmergemeta": {
                                        "$ref": "#/definitions/SettingsMergeMeta"
                                    },
                                    "settingshtml": {
                                        "$ref": "#/definitions/SettingsHtml"
                                    },
                                    "settingsword": {
                                        "$ref": "#/definitions/SettingsWord"
                                    },
                                    "settingsmergeheaderfooters": {
                                        "$ref": "#/definitions/SettingsMergeHeaderFooters"
                                    },
                                    "settingspdf": {
                                        "$ref": "#/definitions/SettingsPdf"
                                    },
                                    "settingscad": {
                                        "$ref": "#/definitions/SettingsCad"
                                    },
                                    "settingspagesetup": {
                                        "$ref": "#/definitions/SettingsPageSetup"
                                    },
                                    "settingspropmappings": {
                                        "$ref": "#/definitions/SettingsPropMappings"
                                    },
                                    "settingsconvert": {
                                        "$ref": "#/definitions/SettingsConvert"
                                    },
                                    "settingssignature": {
                                        "$ref": "#/definitions/Signature"
                                    },
                                    "settingswatermarks": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "$ref": "#/definitions/Watermark"
                                        }
                                    },
                                    "settingsdeletewatermarks": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "type": [
                                                "string",
                                                "null"
                                            ]
                                        }
                                    },
                                    "actionconvert": {
                                        "type": "boolean"
                                    },
                                    "actiondeletewatermark": {
                                        "type": "boolean"
                                    },
                                    "actionmerge": {
                                        "type": "boolean"
                                    },
                                    "actionmergeheaderfooter": {
                                        "type": "boolean"
                                    },
                                    "actionmergemeta": {
                                        "type": "boolean"
                                    },
                                    "actionocr": {
                                        "type": "boolean"
                                    },
                                    "actionsign": {
                                        "type": "boolean"
                                    },
                                    "actionsplit": {
                                        "type": "boolean"
                                    },
                                    "actionwatermark": {
                                        "type": "boolean"
                                    },
                                    "actionmapproperties": {
                                        "type": "boolean"
                                    },
                                    "actionsecurepdf": {
                                        "type": "boolean"
                                    },
                                    "actioncompress": {
                                        "type": "boolean"
                                    },
                                    "actionflattensignatures": {
                                        "type": "boolean"
                                    },
                                    "extensionsfilter": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "type": [
                                                "string",
                                                "null"
                                            ]
                                        }
                                    }
                                }
                            },
                            "DocumentPrivilege": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "allowassembly": {
                                        "type": "boolean"
                                    },
                                    "allowcopy": {
                                        "type": "boolean"
                                    },
                                    "allowdegradedprinting": {
                                        "type": "boolean"
                                    },
                                    "allowfillin": {
                                        "type": "boolean"
                                    },
                                    "allowmodifyannotations": {
                                        "type": "boolean"
                                    },
                                    "allowmodifycontents": {
                                        "type": "boolean"
                                    },
                                    "allowprint": {
                                        "type": "boolean"
                                    },
                                    "allowscreenreaders": {
                                        "type": "boolean"
                                    },
                                    "changeallowlevel": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "None",
                                            "InsertingDeletingRotatingPages",
                                            "FillingInFormfieldsAndSignExistingSignatureFields",
                                            "CommentingFillingInFormfieldsAndSignExistingSignatureFields",
                                            "AnyExceptExtract"
                                        ]
                                    },
                                    "copyallowlevel": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "None",
                                            "EnableTextAccessForScreenReaderDevicesForTheVisuallyImpaired",
                                            "EnableCopyingOfTextImagesAndOtherContent"
                                        ]
                                    },
                                    "printallowlevel": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "None",
                                            "LowResolution150Dpi",
                                            "HighResolution"
                                        ]
                                    }
                                }
                            },
                            "DocumentSaveStrategy": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "serverside": {
                                        "type": "boolean"
                                    },
                                    "overwrite": {
                                        "type": "boolean"
                                    },
                                    "keepfolderstructure": {
                                        "type": "boolean"
                                    },
                                    "replaceoriginalextension": {
                                        "type": "boolean"
                                    },
                                    "namingpattern": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "samefolderasoriginal": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "Dum": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "wfrun": {
                                        "$ref": "#/definitions/WorkflowRun"
                                    },
                                    "pipelinestatus": {
                                        "$ref": "#/definitions/PipelineStatus"
                                    },
                                    "taskdef": {
                                        "$ref": "#/definitions/TaskDef"
                                    }
                                }
                            },
                            "PipelineStatus": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "id": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "runid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "statusinfo": {
                                        "$ref": "#/definitions/StatusInfo"
                                    },
                                    "output": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "customdata": {
                                        "type": [
                                            "object",
                                            "null"
                                        ],
                                        "additionalProperties": {}
                                    }
                                }
                            },
                            "SettingsCad": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "cadforcelineweight": {
                                        "type": "number"
                                    },
                                    "cadblackwhite": {
                                        "type": "boolean"
                                    },
                                    "cadbgcolor": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "SettingsConvert": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "saveformat": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "doc",
                                            "docx",
                                            "ppt",
                                            "pptx",
                                            "xls",
                                            "xlsx",
                                            "pdf",
                                            "html",
                                            "mhtml",
                                            "gif",
                                            "png",
                                            "jpeg",
                                            "tiff",
                                            "text"
                                        ]
                                    }
                                }
                            },
                            "SettingsEMailDocument": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "excludedemailattachmentsextensions": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "type": [
                                                "string",
                                                "null"
                                            ]
                                        }
                                    },
                                    "attachmentseparator": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "removeextensionsfrombookmarks": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsHtml": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "saveassinglefile": {
                                        "type": "boolean"
                                    },
                                    "additionalmarginwidth": {
                                        "type": "integer"
                                    },
                                    "splitpages": {
                                        "type": "boolean"
                                    },
                                    "border": {
                                        "type": "integer"
                                    },
                                    "extprefix": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "zipoutput": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsMerge": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "intermediatepage": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "namingpattern": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "settingswordmerge": {
                                        "$ref": "#/definitions/SettingsWordMerge"
                                    },
                                    "saveformat": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "doc",
                                            "docx",
                                            "ppt",
                                            "pptx",
                                            "xls",
                                            "xlsx",
                                            "pdf",
                                            "html",
                                            "mhtml",
                                            "gif",
                                            "png",
                                            "jpeg",
                                            "tiff",
                                            "text"
                                        ]
                                    }
                                }
                            },
                            "SettingsMergeHeaderFooters": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "headersdocument": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "appendheaders": {
                                        "type": "boolean"
                                    },
                                    "footersdocument": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "appenfooters": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsMergeMeta": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "usestrictreplacement": {
                                        "type": "boolean"
                                    },
                                    "mergenullorempty": {
                                        "type": "boolean"
                                    },
                                    "removeemptylines": {
                                        "type": "boolean"
                                    },
                                    "wordtrackchanges": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsOCR": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "checknotextonly": {
                                        "type": "boolean"
                                    },
                                    "autorotateimages": {
                                        "type": "boolean"
                                    },
                                    "resolution": {
                                        "type": "integer"
                                    },
                                    "ocrdevice": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "pdfocr8",
                                            "pdfocr24",
                                            "pdfocr32"
                                        ]
                                    },
                                    "downscalefactor": {
                                        "type": "integer"
                                    }
                                }
                            },
                            "SettingsPageSetup": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "forcepagesetup": {
                                        "type": "boolean"
                                    },
                                    "papersize": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "letter",
                                            "tabloid",
                                            "ledger",
                                            "legal",
                                            "statement",
                                            "executive",
                                            "a0",
                                            "a1",
                                            "a2",
                                            "a3",
                                            "a4",
                                            "a5",
                                            "b4",
                                            "b5",
                                            "envelope",
                                            "folio",
                                            "quarto",
                                            "p10x14",
                                            "custom"
                                        ]
                                    },
                                    "orientation": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Portrait",
                                            "Landscape"
                                        ]
                                    },
                                    "margintop": {
                                        "type": "number"
                                    },
                                    "marginleft": {
                                        "type": "number"
                                    },
                                    "marginbottom": {
                                        "type": "number"
                                    },
                                    "marginright": {
                                        "type": "number"
                                    },
                                    "width": {
                                        "type": "number"
                                    },
                                    "height": {
                                        "type": "number"
                                    }
                                }
                            },
                            "SettingsPdf": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "greylevels": {
                                        "type": "boolean"
                                    },
                                    "bookmarksoutlinelevel": {
                                        "type": "integer"
                                    },
                                    "expandedoutlinelevels": {
                                        "type": "integer"
                                    },
                                    "headingsoutlinelevels": {
                                        "type": "boolean"
                                    },
                                    "pdfformat": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "PDF_A_1A",
                                            "PDF_A_1B",
                                            "PDF_A_2A",
                                            "PDF_A_3A",
                                            "PDF_A_2B",
                                            "PDF_A_2U",
                                            "PDF_A_3B",
                                            "PDF_A_3U",
                                            "v_1_0",
                                            "v_1_1",
                                            "v_1_2",
                                            "v_1_3",
                                            "v_1_4",
                                            "v_1_5",
                                            "v_1_6",
                                            "v_1_7",
                                            "v_2_0",
                                            "PDF_UA_1",
                                            "PDF_X_1A_2001",
                                            "PDF_X_1A",
                                            "PDF_X_3",
                                            "ZUGFeRD"
                                        ]
                                    },
                                    "embedfullfonts": {
                                        "type": "boolean"
                                    },
                                    "settingspdfsecurity": {
                                        "$ref": "#/definitions/SettingsPdfSecurity"
                                    },
                                    "settingspdfcompression": {
                                        "$ref": "#/definitions/SettingsPdfCompression"
                                    },
                                    "openbookmarks": {
                                        "type": "boolean"
                                    },
                                    "optimizeforweb": {
                                        "type": "boolean"
                                    },
                                    "inheritzoom": {
                                        "type": "boolean"
                                    },
                                    "initialmagnification": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Default",
                                            "FitPage",
                                            "FitWidth",
                                            "FitHeight",
                                            "FitVisible",
                                            "pct25",
                                            "pct50",
                                            "pct75",
                                            "pct100",
                                            "pct125",
                                            "pct150",
                                            "pct200",
                                            "pct400",
                                            "pct800",
                                            "pct1600",
                                            "pct3200",
                                            "pct6400"
                                        ]
                                    },
                                    "initialpagelayout": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "SinglePage",
                                            "OneColumn",
                                            "TwoColumnLeft",
                                            "TwoColumnRight",
                                            "TwoPageLeft",
                                            "TwoPageRight",
                                            "Default"
                                        ]
                                    },
                                    "createbookmarksfromword": {
                                        "type": "boolean"
                                    },
                                    "cbcustomtext": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "baseurl": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "flattenpdf": {
                                        "type": "boolean"
                                    },
                                    "bookmarkmergeddocs": {
                                        "type": "boolean"
                                    },
                                    "passwords": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "type": [
                                                "string",
                                                "null"
                                            ]
                                        }
                                    }
                                }
                            },
                            "SettingsPdfCompression": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "compress": {
                                        "type": "boolean"
                                    },
                                    "jpegquality": {
                                        "type": "integer"
                                    },
                                    "downsample": {
                                        "type": "integer"
                                    }
                                }
                            },
                            "SettingsPdfSecurity": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "cryptoalgorithm": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "RC4x40",
                                            "RC4x128",
                                            "AESx128",
                                            "AESx256"
                                        ]
                                    },
                                    "ownerpassword": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "userpassword": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "usepdf20": {
                                        "type": "boolean"
                                    },
                                    "documentprivilege": {
                                        "$ref": "#/definitions/DocumentPrivilege"
                                    }
                                }
                            },
                            "SettingsPipeline": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "ignoreunknownfileextensions": {
                                        "type": "boolean"
                                    },
                                    "continueonerror": {
                                        "type": "boolean"
                                    },
                                    "deleteoriginalonsuccess": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsPropMappings": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "mapproperties": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "mapfields": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "convertutf8": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsSignature": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "signatureprovider": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "twofactorsprovider": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "certificationlevel": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "NOT_CERTIFIED",
                                            "CERTIFIED_NO_CHANGES_ALLOWED",
                                            "CERTIFIED_FORM_FILLING",
                                            "CERTIFIED_FORM_FILLING_AND_ANNOTATIONS"
                                        ]
                                    },
                                    "signpagenumber": {
                                        "type": "integer"
                                    },
                                    "signlastpage": {
                                        "type": "boolean"
                                    },
                                    "signatureimage": {
                                        "type": "boolean"
                                    },
                                    "showreason": {
                                        "type": "boolean"
                                    },
                                    "showlocation": {
                                        "type": "boolean"
                                    },
                                    "showsigndate": {
                                        "type": "boolean"
                                    },
                                    "showcontact": {
                                        "type": "boolean"
                                    },
                                    "showdept": {
                                        "type": "boolean"
                                    },
                                    "showfunction": {
                                        "type": "boolean"
                                    },
                                    "showtitle": {
                                        "type": "boolean"
                                    },
                                    "textjustify": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "left",
                                            "center",
                                            "right"
                                        ]
                                    },
                                    "textpositionv": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "top",
                                            "center",
                                            "bottom"
                                        ]
                                    },
                                    "verticalalign": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "top",
                                            "center",
                                            "bottom"
                                        ]
                                    },
                                    "horizontalalign": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "left",
                                            "center",
                                            "right"
                                        ]
                                    },
                                    "signaturemarginh": {
                                        "type": "integer"
                                    },
                                    "signaturemarginv": {
                                        "type": "integer"
                                    },
                                    "pagemargintop": {
                                        "type": "integer"
                                    },
                                    "pagemarginleft": {
                                        "type": "integer"
                                    },
                                    "pagemarginbottom": {
                                        "type": "integer"
                                    },
                                    "pagemarginright": {
                                        "type": "integer"
                                    },
                                    "font": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "fontsize": {
                                        "type": "integer"
                                    },
                                    "fontrtol": {
                                        "type": "boolean"
                                    },
                                    "x": {
                                        "type": "integer"
                                    },
                                    "y": {
                                        "type": "integer"
                                    },
                                    "height": {
                                        "type": "integer"
                                    },
                                    "width": {
                                        "type": "integer"
                                    },
                                    "signdateformat": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "appendpageifneeded": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsWord": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "updatesummaries": {
                                        "type": "boolean"
                                    },
                                    "removemacros": {
                                        "type": "boolean"
                                    },
                                    "trackchanges": {
                                        "type": "boolean"
                                    },
                                    "acceptrevisions": {
                                        "type": "boolean"
                                    },
                                    "splitsections": {
                                        "type": "boolean"
                                    },
                                    "updatepagelayout": {
                                        "type": "boolean"
                                    },
                                    "deletecomments": {
                                        "type": "boolean"
                                    },
                                    "disabletrackchanges": {
                                        "type": "boolean"
                                    },
                                    "updateallfields": {
                                        "type": "boolean"
                                    },
                                    "updateselectedfields": {
                                        "type": "boolean"
                                    },
                                    "selectedfields": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "lockselectedfields": {
                                        "type": "boolean"
                                    },
                                    "lockedfields": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "inlineimagewithtext": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SettingsWordMerge": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "sectionstart": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Continuous",
                                            "NewColumn",
                                            "NewPage",
                                            "EvenPage",
                                            "OddPage"
                                        ]
                                    },
                                    "columnset": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "none",
                                            "twocols"
                                        ]
                                    },
                                    "linebetweencols": {
                                        "type": "boolean"
                                    },
                                    "inheritpagesetup": {
                                        "type": "boolean"
                                    },
                                    "endpagesectionstart": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Continuous",
                                            "NewColumn",
                                            "NewPage",
                                            "EvenPage",
                                            "OddPage"
                                        ]
                                    },
                                    "mergetrackchanges": {
                                        "type": "boolean"
                                    },
                                    "mergetrackchangescharacterlevel": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "SignUser": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "firstname": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "lastname": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "initials": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "department": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "title": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "email": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "timezone": {
                                        "type": "integer"
                                    },
                                    "location": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "sign_password": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "otp": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "Signature": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "settingssignature": {
                                        "$ref": "#/definitions/SettingsSignature"
                                    },
                                    "wfholders": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "$ref": "#/definitions/Signature"
                                        }
                                    },
                                    "wsid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "pageno": {
                                        "type": "integer"
                                    },
                                    "x": {
                                        "type": "integer"
                                    },
                                    "y": {
                                        "type": "integer"
                                    },
                                    "height": {
                                        "type": "integer"
                                    },
                                    "width": {
                                        "type": "integer"
                                    },
                                    "signinguser": {
                                        "$ref": "#/definitions/SignUser"
                                    },
                                    "signinguserbehalf": {
                                        "$ref": "#/definitions/SignUser"
                                    },
                                    "sign_comment": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "sign_date": {
                                        "type": "string",
                                        "format": "date-time"
                                    },
                                    "numsigns": {
                                        "type": "integer"
                                    },
                                    "pdfownerpassword": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            },
                            "StatusInfo": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "status": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Pending",
                                            "Processing",
                                            "Canceling",
                                            "Completed",
                                            "Errored",
                                            "Canceled",
                                            "Unchanged"
                                        ]
                                    },
                                    "statusmsg": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "errordetails": {
                                        "type": [
                                            "array",
                                            "null"
                                        ],
                                        "items": {
                                            "type": [
                                                "string",
                                                "null"
                                            ]
                                        }
                                    },
                                    "timing": {
                                        "type": "integer"
                                    },
                                    "datasize": {
                                        "type": "integer"
                                    }
                                }
                            },
                            "StoreSettingsContentServer": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "url": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "tlsversion": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "SystemDefault",
                                            "Ssl3",
                                            "Tls",
                                            "Tls11",
                                            "Tls12",
                                            "Tls13"
                                        ]
                                    },
                                    "userlogin": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "password": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "sessiontimeout": {
                                        "type": "integer"
                                    },
                                    "httptimeout": {
                                        "type": "integer"
                                    },
                                    "convertfilenamestocstags": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "StoreSettingsNATS": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "url": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "publickey": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "privatekey": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "servername": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "inmemory": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "StoreSettingsS3": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "url": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "accesskey": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "secretkey": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "region": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "usessl": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "StoreSettingsSharepoint": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "siteurl": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "clientid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "clientsecret": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "chunksize": {
                                        "type": "integer"
                                    }
                                }
                            },
                            "TaskDef": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "pplid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "workflowtype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Standard",
                                            "PdfBook",
                                            "WordBook",
                                            "Ocr",
                                            "Print"
                                        ]
                                    },
                                    "runid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "id": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "tasktype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Load",
                                            "Preprocess",
                                            "Merge",
                                            "Postprocess",
                                            "Sign",
                                            "Ocr",
                                            "Upload"
                                        ]
                                    },
                                    "input": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "builder": {
                                        "$ref": "#/definitions/DocBuilder"
                                    },
                                    "output": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "statusinfo": {
                                        "$ref": "#/definitions/StatusInfo"
                                    }
                                }
                            },
                            "Watermark": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "watermarktype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "Text",
                                            "Qrcode",
                                            "Image",
                                            "Staticimage"
                                        ]
                                    },
                                    "layername": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "color": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "fontfamily": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "COURIER",
                                            "HELVETICA",
                                            "TIMES_ROMAN",
                                            "SYMBOL",
                                            "ZAPFDINGBATS",
                                            "UNDEFINED"
                                        ]
                                    },
                                    "fontsize": {
                                        "type": "integer"
                                    },
                                    "rotation": {
                                        "type": "integer"
                                    },
                                    "height": {
                                        "type": "integer"
                                    },
                                    "text": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "width": {
                                        "type": "integer"
                                    },
                                    "underlayout": {
                                        "type": "boolean"
                                    },
                                    "fontbold": {
                                        "type": "boolean"
                                    },
                                    "fontitalic": {
                                        "type": "boolean"
                                    },
                                    "verticalalign": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "top",
                                            "center",
                                            "bottom"
                                        ]
                                    },
                                    "horizontalalign": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "left",
                                            "center",
                                            "right"
                                        ]
                                    },
                                    "texthorizontalalign": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "left",
                                            "center",
                                            "right"
                                        ]
                                    },
                                    "textverticalposition": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "top",
                                            "center",
                                            "bottom"
                                        ]
                                    },
                                    "textmargin": {
                                        "type": "integer"
                                    },
                                    "watermarkmarginhorizontal": {
                                        "type": "integer"
                                    },
                                    "watermarkmarginvertical": {
                                        "type": "integer"
                                    },
                                    "border": {
                                        "type": "integer"
                                    },
                                    "borderadius": {
                                        "type": "integer"
                                    },
                                    "transparentbackground": {
                                        "type": "boolean"
                                    },
                                    "image": {
                                        "$ref": "#/definitions/Artifact"
                                    },
                                    "barcodetype": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "None",
                                            "Pdf417",
                                            "MacroPdf417",
                                            "GS1DataMatrix",
                                            "MicroPdf417",
                                            "GS1QR",
                                            "MaxiCode",
                                            "DotCode",
                                            "AustraliaPost",
                                            "Postnet",
                                            "Planet",
                                            "OneCode",
                                            "RM4SCC",
                                            "Mailmark",
                                            "DatabarOmniDirectional",
                                            "DatabarTruncated",
                                            "DatabarLimited",
                                            "DatabarExpanded",
                                            "GS1CodablockF",
                                            "CodablockF",
                                            "UpcaGs1DatabarCoupon",
                                            "UpcaGs1Code128Coupon",
                                            "DutchKIX",
                                            "DataLogic2of5",
                                            "Aztec",
                                            "Code32",
                                            "SwissPostParcel",
                                            "AustralianPosteParcel",
                                            "SingaporePost",
                                            "DatabarStackedOmniDirectional",
                                            "DatabarStacked",
                                            "DatabarExpandedStacked",
                                            "PatchCode",
                                            "DataMatrix",
                                            "QR",
                                            "UPCE",
                                            "Code39Standard",
                                            "Code39Extended",
                                            "Code93Standard",
                                            "Code93Extended",
                                            "Code128",
                                            "GS1Code128",
                                            "EAN8",
                                            "EAN13",
                                            "EAN14",
                                            "SCC14",
                                            "SSCC18",
                                            "UPCA",
                                            "Pharmacode",
                                            "ISBN",
                                            "Code11",
                                            "ISSN",
                                            "Standard2of5",
                                            "Interleaved2of5",
                                            "Matrix2of5",
                                            "ItalianPost25",
                                            "IATA2of5",
                                            "ITF14",
                                            "ITF6",
                                            "MSI",
                                            "VIN",
                                            "DeutschePostIdentcode",
                                            "DeutschePostLeitcode",
                                            "OPC",
                                            "PZN",
                                            "Code16K",
                                            "ISMN",
                                            "Codabar"
                                        ]
                                    },
                                    "displaybarcodetext": {
                                        "type": "boolean"
                                    },
                                    "barcodezoom": {
                                        "type": "number"
                                    },
                                    "watermarkon": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "watermarkfirstpage",
                                            "watermarklastpage",
                                            "watermarkallpages"
                                        ]
                                    },
                                    "watermarkfrompage": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "watermarktopage": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "opacity": {
                                        "type": "number"
                                    }
                                }
                            },
                            "WorkflowRun": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "properties": {
                                    "pplid": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    },
                                    "id": {
                                        "type": [
                                            "string",
                                            "null"
                                        ]
                                    }
                                }
                            }
                        },
                        "type": "object",
                        "properties": {
                            "dum": {
                                "$ref": "#/definitions/Dum"
                            },
                            "id": {
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "workflowtype": {
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "enum": [
                                    "Standard",
                                    "PdfBook",
                                    "WordBook",
                                    "Ocr",
                                    "Print"
                                ]
                            },
                            "merge": {
                                "type": "boolean"
                            },
                            "pipelinesettings": {
                                "$ref": "#/definitions/SettingsPipeline"
                            },
                            "metadata": {
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "inputs": {
                                "$ref": "#/definitions/Artifact"
                            },
                            "processors": {
                                "type": [
                                    "array",
                                    "null"
                                ],
                                "items": {
                                    "$ref": "#/definitions/DocBuilder"
                                }
                            },
                            "mergesettings": {
                                "$ref": "#/definitions/SettingsMerge"
                            },
                            "postprocess": {
                                "type": [
                                    "array",
                                    "null"
                                ],
                                "items": {
                                    "$ref": "#/definitions/DocBuilder"
                                }
                            },
                            "signatures": {
                                "type": [
                                    "array",
                                    "null"
                                ],
                                "items": {
                                    "$ref": "#/definitions/Signature"
                                }
                            },
                            "output": {
                                "$ref": "#/definitions/Artifact"
                            },
                            "defaultstoresettingscontentserver": {
                                "$ref": "#/definitions/StoreSettingsContentServer"
                            },
                            "defaultstoresettingss3": {
                                "$ref": "#/definitions/StoreSettingsS3"
                            },
                            "defaultstoresettingsnats": {
                                "$ref": "#/definitions/StoreSettingsNATS"
                            },
                            "defaultstoresettingssharepoint": {
                                "$ref": "#/definitions/StoreSettingsSharepoint"
                            },
                            "defaultdocumentsavestrategy": {
                                "$ref": "#/definitions/DocumentSaveStrategy"
                            },
                            "customdata": {
                                "type": [
                                    "object",
                                    "null"
                                ],
                                "additionalProperties": {}
                            }
                        }
                    }
                }
            ]
        });
    }
}