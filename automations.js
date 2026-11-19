const automations = [
  {name:'Auto Grid Maker',code:'GRID',label:'Field data cleanup',categories:['cad','data'],summary:'Prepares survey points for treatment grid layout by selecting records for a specified date, removing duplicates, and consolidating the results into one file.',meta:'AutoCAD scripting · Spreadsheet files'},
  {name:'Custom Grid Maker',code:'AREA',label:'Treatment area layout',categories:['cad'],summary:'Creates a rectangular treatment grid of specified dimensions from two points selected in AutoCAD.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'EOD Grid Change',code:'EOD',label:'End-of-day drawing update',categories:['cad'],summary:'Identifies treatment grids with survey points and updates their production status for end-of-day reporting.',meta:'AutoCAD scripting · Civil 3D'},
  {name:'Grid Duplicate Cleanup',code:'DUPE',label:'Drawing quality check',categories:['cad'],summary:'Identifies and removes duplicate treatment grid outlines across drawing layers.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'Grid Label Duplicate Checker',code:'QA',label:'Label quality check',categories:['cad'],summary:'Identifies duplicate treatment grid labels before drawing submission.',meta:'AutoCAD scripting · Drawing text'},
  {name:'Grid Automation Notebook',code:'BATCH',label:'CAD data automation',categories:['cad','data'],summary:'Runs batch grid operations from CSV inputs in a Jupyter notebook.',meta:'Python · Jupyter · CSV'},
  {name:'OCR Material & Item Tool',code:'ITEM',label:'Document OCR counting',categories:['cad','ai'],summary:'Uses optical character recognition to count materials and items shown in images, PDFs, and drawings.',meta:'Python · OCR · Image analysis'},
  {name:'Hyperlink Grid Labeler',code:'LINK',label:'Treatment-grid labeling',categories:['cad'],summary:'Creates centered treatment grid labels from identifiers stored in drawing hyperlinks.',meta:'AutoCAD scripting · Drawing text'},
  {name:'Layer List',code:'LAYR',label:'Drawing layer inventory',categories:['cad','utility'],summary:'Lists all layers in the active drawing for review.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'Layer Maker',code:'MAKE',label:'Drawing layer setup',categories:['cad'],summary:'Creates drawing layers in batches from a reusable layer definition.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'Layout Generator',code:'LAY',label:'Print sheet setup',categories:['cad'],summary:'Generates named layouts and applies viewport layer settings from a reusable definition.',meta:'AutoCAD scripting · Print layouts'},
  {name:'Auto Labeler',code:'LBL',label:'Sequential point labeling',categories:['cad'],summary:'Places sequential two-line labels at selected points.',meta:'AutoCAD scripting · Drawing text'},
  {name:'Turnover Automation',code:'TURN',label:'End-of-day turnover package',categories:['cad'],summary:'Generates turnover fills and work package layers and associates survey points with the corresponding work package.',meta:'AutoCAD scripting · Civil 3D'},
  {name:'DAR Area Export',code:'AREA',label:'Daily report area export',categories:['cad','reporting'],summary:'Calculates labeled treatment areas and exports the results for the daily activity report.',meta:'AutoCAD scripting · Spreadsheet files'},
  {name:'Treated Grid Center Export',code:'CTR',label:'QA/QC center-point export',categories:['cad','data'],summary:'Exports treatment grid center coordinates to a spreadsheet for tracking and verification.',meta:'AutoCAD scripting · Spreadsheet files'},
  {name:'DAR Draw-Order Cleanup',code:'ORDER',label:'Completed-grid display cleanup',categories:['cad'],summary:'Moves completed treatment grids to the foreground for reporting while preserving their geometry.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'DAR Volume Calculator',code:'VOL',label:'Daily report volume calculation',categories:['cad','data','reporting'],summary:'Calculates treated material volumes by matching area boundaries with their depth labels.',meta:'AutoCAD scripting · Quantity takeoff'},
  {name:'AutoCAD Point Extract',code:'PTS',label:'Drawing point export',categories:['cad','data'],summary:'Exports point coordinates and associated attributes from the active AutoCAD drawing.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'Area / Takeoff Calculator',code:'QTY',label:'Area takeoff by layer',categories:['cad','data'],summary:'Calculates polygon areas by drawing layer and exports quantities grouped by work package.',meta:'AutoCAD scripting · Spreadsheet files · Work packages'},
  {name:'Hatch Boundary Extractor',code:'HATCH',label:'Filled-area boundary export',categories:['cad','data'],summary:'Extracts corner coordinates from hatch boundaries.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'MTEXT CSV Exporter',code:'TEXT',label:'Drawing text export',categories:['cad','data'],summary:'Exports multiline text from a selected drawing layer to a CSV file.',meta:'AutoCAD scripting · Drawing text · Spreadsheet files'},
  {name:'KML Generator',code:'KML',label:'Map file export',categories:['cad','data'],summary:'Converts Louisiana State Plane polygons to geographic coordinates and exports them as KML.',meta:'AutoCAD scripting · Map coordinates · KML'},
  {name:'Point-to-Hatch Classifier',code:'CLASS',label:'Point-in-area classification',categories:['cad','data'],summary:'Classifies survey points by the hatch boundaries that contain them and generates a structured list.',meta:'Python · Reviewable notebook · Geometry'},
  {name:'Polyline-to-Table',code:'TABLE',label:'Outline-to-table conversion',categories:['cad','data'],summary:'Creates AutoCAD tables from polyline vertices and supports batch processing outside the drawing.',meta:'AutoCAD scripting · Python · Batch control'},
  {name:'Coordinate Picker',code:'XY',label:'Precise coordinate readout',categories:['cad','utility'],summary:'Returns the coordinates of a selected drawing point.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'EOD Cleanup',code:'CLEAN',label:'End-of-day drawing cleanup',categories:['cad'],summary:'Removes temporary survey points and updates production grids to their completed state.',meta:'AutoCAD scripting · Civil 3D'},
  {name:'EOD Complete',code:'DONE',label:'One-command end-of-day closeout',categories:['cad'],summary:'Combines treatment grid status updates and drawing cleanup in one command.',meta:'AutoCAD scripting · Civil 3D'},
  {name:'Site Map Draw-Order Cleanup',code:'MAP',label:'Site-map display cleanup',categories:['cad'],summary:'Moves treatment grid layers behind site map features to keep the underlying map legible.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'Stray Polyline Finder',code:'OPEN',label:'Open-outline quality check',categories:['cad'],summary:'Identifies and counts open polylines that require closure before area calculations.',meta:'AutoCAD scripting · Quality check'},
  {name:'Completed Grid QA Check',code:'CHECK',label:'Completed-grid verification list',categories:['cad'],summary:'Generates a verification list of treatment grids marked complete.',meta:'AutoCAD scripting · Quality check'},
  {name:'AutoLISP Unloader',code:'UNLOAD',label:'Command cleanup utility',categories:['cad','utility'],summary:'Unloads user-defined AutoLISP commands without restarting AutoCAD.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'Inward Offset',code:'INSET',label:'Inward outline offset',categories:['cad'],summary:'Offsets multiple closed outlines inward in one batch.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'XREF Reload All',code:'XREF',label:'Reference refresh utility',categories:['cad','utility'],summary:'Reloads all attached external references in one command.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'Clifty Creek Master Workbook Updater',code:'BOOK',label:'Master workbook update',categories:['data','reporting'],summary:'Replaces a target worksheet or updates its records by key using source spreadsheets.',meta:'Python · Excel · Spreadsheet files'},
  {name:'Daily Point CSV Processor',code:'CSV',label:'Daily survey file cleanup',categories:['data','field'],summary:'Filters survey point records by date, removes duplicates, and consolidates the results for daily closeout.',meta:'Python · Desktop app · Spreadsheet files'},
  {name:'DXF Fast Takeoff',code:'DXF',label:'Fast DXF quantity takeoff',categories:['cad','data'],summary:'Counts and measures filled areas within selected DXF boundaries.',meta:'Python · DXF files'},
  {name:'Live AutoCAD MTEXT Extractor',code:'LIVE',label:'Live drawing text extract',categories:['cad','data'],summary:'Extracts multiline text in batches from a running AutoCAD session.',meta:'Python · Live AutoCAD control'},
  {name:'MTEXT Workbook Sorter',code:'SORT',label:'Drawing-label workbook organizer',categories:['data','reporting'],summary:'Organizes drawing labels by category in a multi-sheet Excel workbook.',meta:'Python · Excel'},
  {name:'Polygon Partitioner',code:'SPLIT',label:'Area split into sub-polygons',categories:['cad'],summary:'Partitions a selected AutoCAD polygon into smaller polygons through an external controller.',meta:'Python · Live AutoCAD control'},
  {name:'Trimble TSC7 Data Puller',code:'TSC7',label:'Survey collector data pull',categories:['field','data'],summary:'Retrieves selected work orders from a Trimble TSC7, preserves raw files, and produces dated survey outputs.',meta:'Python · Desktop app'},
  {name:'CAT VisionLink Fault Report Pipeline',code:'CAT',label:'Equipment fault reporting',categories:['reporting','data'],summary:'Converts CAT VisionLink equipment fault exports into formatted PDF reports.',meta:'Python · Browser automation · PDF',status:'In development'},
  {name:'DAR Field Reporting App',code:'DAR',label:'Mobile daily activity report',categories:['field','apps','reporting'],summary:'Captures personnel, hours, equipment, work areas, and site notes for mobile daily activity report review and delivery.',meta:'Power Apps · Outlook'},
  {name:'Load Count Log',code:'LOAD',label:'Material haul logging',categories:['field','apps'],summary:'Records material haul loads in a structured field log for submission and tracking.',meta:'Power Apps · SharePoint'},
  {name:'DAR Email-to-Workbook Pipeline',code:'FILL',label:'Email-to-DAR workbook fill',categories:['reporting','data','ai'],summary:'Extracts daily activity report data from email, reviews wording with a local model, updates Excel records and photo logs, and records each run.',meta:'Python · Outlook · Excel · Local AI'},
  {name:'QA/QC Elevation Workbooks',code:'QAQC',label:'Survey-versus-design QA workbooks',categories:['reporting','data','field'],summary:'Generates workbooks comparing surveyed elevations with design grades, including tolerance checks, duplicate checks, dashboards, and exports.',meta:'Python · Excel · Survey data'},
  {name:'PDF Compressor',code:'PDF',label:'PDF size reduction',categories:['utility','reporting'],summary:'Reduces PDF file size with email and print presets while preserving transparent imagery.',meta:'Python · Windows desktop'},
  {name:'Outlook Daily Summary',code:'MAIL',label:'Daily email digest and actions',categories:['reporting','ai'],summary:'Summarizes Outlook messages and organizes identified action items in local work notes.',meta:'Python · Outlook · Local notes',status:'In development'},
  {name:'Receipt Parser & Expense Grouper',code:'EXP',label:'Receipt-to-expense reports',categories:['data','reporting'],summary:'Extracts vendor, date, amount, and payment card from receipts and groups expenses by card in Excel.',meta:'Python · PDF · Excel'},
  {name:'Receipt / Ticket OCR Renamer',code:'OCR',label:'Scanned ticket OCR renaming',categories:['data','ai','utility'],summary:'Splits scanned receipts or tickets, extracts dates and totals with optical character recognition, and applies consistent filenames.',meta:'Python · OCR · PDF'},
  {name:'Fuel Ticket Scanner',code:'FUEL',label:'Fuel ticket data extract',categories:['field','data'],summary:'Extracts flags, ticket numbers, and gallon quantities from fuel-ticket PDFs.',meta:'Python · OCR · PDF'},
  {name:'Phase Code Workbook Splitter',code:'PHASE',label:'Phase-code workbook split',categories:['data','reporting'],summary:'Creates a formatted Excel worksheet for each phase code in a cost spreadsheet.',meta:'Python · Spreadsheet files · Excel'},
  {name:'Local Whisper Dictation',code:'VOICE',label:'Offline speech-to-text',categories:['ai','utility'],summary:'Transcribes speech locally from a keyboard shortcut and inserts the transcript or copies it to the clipboard.',meta:'Python · Local speech AI · GPU'},
  {name:'Optimal Work Dashboard',code:'FOCUS',label:'Personal focus dashboard',categories:['apps'],summary:'Combines task lists, checklists, timers, and end-of-day review in a local desktop application.',meta:'Desktop app · Local database'},
  {name:'AutoCAD LISP Test Harness',code:'TEST',label:'CAD script test harness',categories:['cad','utility'],summary:'Runs AutoLISP scripts in Civil 3D and records errors, logs, and results against reusable test cases.',meta:'Python · Civil 3D · Test cards'},
  {name:'ENTACT Civil 3D Assistant',code:'C3D',label:'Local AI drafting assistant',categories:['cad','ai','apps'],summary:'Uses a local model to plan Civil 3D drafting actions, requests confirmation before execution, and records an audit log.',meta:'C# · .NET · Civil 3D · Local AI'},
  {name:'MasterFlow Cut / Fill Heat Map',code:'HEAT',label:'Cut/fill heat-map builder',categories:['cad','data'],summary:'Compares LandXML surfaces within a specified boundary and produces a cut-and-fill map and deviation table with automatically selected color bands and intervals.',meta:'C# · Civil 3D · LandXML'},
  {name:'Panel Layout Generator',code:'PANEL',label:'Panel outline builder',categories:['cad'],summary:'Creates closed panel outlines with centered labels.',meta:'Python · AutoCAD'},
  {name:'Panel Vertex Extractor',code:'VERT',label:'Panel corner export',categories:['cad','data'],summary:'Exports vertices from closed, labeled panels to a consistently named spreadsheet.',meta:'Python · DXF · AutoCAD scripting'},
  {name:'Surface Elevation Corrector',code:'ELEV',label:'Surface elevation sampling',categories:['cad','data'],summary:'Samples a TIN surface at survey point locations and exports corrected elevations while retaining the source data.',meta:'AutoCAD scripting · Civil 3D'},
  {name:'MTEXT Grid Maker',code:'MTXT',label:'Name-list text grid',categories:['cad'],summary:'Arranges drawing text labels in a square grid.',meta:'AutoCAD scripting · Drawing text'},
  {name:'Hermes DAR Controller',code:'MERGE',label:'Multi-manager DAR merge',categories:['reporting','data'],summary:'Consolidates daily activity report emails, flags conflicting entries, and prepares the approved report using the existing template.',meta:'Excel macros · Python · Email files'},
  {name:'Excel DAR RowHider',code:'ROWS',label:'Daily-report row cleanup',categories:['reporting','data'],summary:'Hides unused rows in the daily activity report workbook and restores them when data is entered.',meta:'Excel macros · PowerShell'},
  {name:'Universal Grid Leader Maker',code:'LEAD',label:'Treatment-grid leader labeling',categories:['cad'],summary:'Matches labels to treatment grids, creates native multileader callouts, and generates quality review reports.',meta:'AutoCAD scripting · Python · DXF'},
  {name:'MLeader Text Point Exporter',code:'MLEAD',label:'Leader text and point export',categories:['cad','data'],summary:'Exports multileader text and arrow coordinates to a survey-style spreadsheet.',meta:'AutoCAD scripting · Civil 3D · Spreadsheet files'},
  {name:'Point Raw Description Leader',code:'DESC',label:'Survey description callouts',categories:['cad'],summary:'Creates native multileader labels from survey point descriptions.',meta:'AutoCAD scripting · Civil 3D'},
  {name:'StretchLeader',code:'STRETCH',label:'Leader length cleanup',categories:['cad'],summary:'Standardizes multileader lengths in batches while preserving the original callouts and text.',meta:'AutoCAD scripting · AutoCAD'},
  {name:'LandXML Surface Combiner',code:'SURF',label:'Surface file combiner',categories:['cad','data'],summary:'Combines LandXML surfaces while retaining the controlling surface boundary.',meta:'Python · LandXML'},
  {name:'DXF Audit',code:'AUDIT',label:'Drawing content audit',categories:['cad','data'],summary:'Reports drawing, entity, and layer information from a DXF file.',meta:'Python · DXF files'},
  {name:'Grid Label Audit',code:'LABEL',label:'Grid-and-label relationship audit',categories:['cad'],summary:'Identifies missing, duplicate, or orphaned relationships between treatment grids and labels.',meta:'Python · DXF files'},
  {name:'LandXML Validator',code:'VALID',label:'Surface file validation',categories:['cad','data'],summary:'Checks LandXML surface files for issues before import.',meta:'Python · LandXML'},
  {name:'PNEZD Writer',code:'PNEZD',label:'Survey point file writer',categories:['data','field'],summary:'Writes survey points in point number, northing, easting, elevation, and description format.',meta:'Python · Spreadsheet files · Survey data'},
  {name:'OCR Ticket Scanner',code:'SCAN',label:'Field ticket capture app',categories:['apps','field','data'],summary:'Captures ticket images, queues optical character recognition results for review, and adds approved records to Excel Online.',meta:'Power Apps · OCR · SharePoint'},
  {name:'PDF Steamroller',code:'FLAT',label:'Difficult PDF flattener',categories:['utility'],summary:'Rasterizes and compresses AutoCAD-exported PDFs that are difficult to open or distribute.',meta:'Python · PDF · Image processing'},
  {name:'Photo Compressor',code:'PHOTO',label:'Field photo batch compression',categories:['utility','field'],summary:'Compresses field photos in batches while preserving originals, metadata, folder structure, multipage TIFFs, and animated GIFs.',meta:'Python · Image tools · Desktop app'},
  {name:'Viewpoint–DAR Time Audit',code:'TIME',label:'Timesheet-versus-DAR audit',categories:['reporting','data'],summary:'Compares Viewpoint timesheets with daily activity report hours and produces a workbook of discrepancies.',meta:'Python · PDF · Excel'},
  {name:'Sign-In Sheet Cleanup',code:'SIGN',label:'Sign-in sheet print prep',categories:['data','reporting'],summary:'Fits a sign-in sheet to the personnel list, adds blank rows, and formats the result for one-page printing.',meta:'Excel macros · PowerShell'},
  {name:'Jobsite Field Map Builder',code:'MAP',label:'Jobsite visual field tracker',categories:['field','data'],summary:'Creates an Excel site activity tracker from CAD boundaries for personnel, equipment, and work areas.',meta:'Python · Excel · DXF'},
  {name:'Point Shape MLeader',code:'SHAPE',label:'Point-group shape callouts',categories:['cad'],summary:'Converts labeled survey point groups into closed outlines and multileader callouts.',meta:'CAD workflow',status:'In development'},
  {name:'WBSP V-Ditch Surface Generator',code:'DITCH',label:'WBSP V-ditch surface workflow',categories:['project','cad'],summary:'Generates the WBSP V-ditch grading surface through a repeatable workflow.',meta:'Civil 3D · Surface design'},
  {name:'LRCP V-Ditch Design Workflow',code:'LRCP',label:'LRCP V-ditch grading workflow',categories:['project','cad'],summary:'Applies the LRCP V-ditch grading and surface design workflow.',meta:'Civil 3D · Grading'},
  {name:'WBSP Lime-Mixing LandXML Generator',code:'LIME',label:'WBSP lime-mixing surface export',categories:['project','cad','data'],summary:'Generates LandXML surfaces from WBSP lime-mixing design inputs.',meta:'Python · LandXML · Civil 3D'},
  {name:'Landfill Grid MTEXT QA',code:'LFQA',label:'Landfill grid label QA',categories:['project','cad'],summary:'Checks landfill repair grid labels and geometry for missing or inconsistent data.',meta:'AutoCAD · Quality check'},
  {name:'As-Built Drainage QA Highlighter',code:'DRAIN',label:'Drainage as-built QA highlight',categories:['project','cad','data'],summary:'Highlights surveyed drainage points that require engineering review.',meta:'Civil 3D · Survey QA'},
  {name:'Civil 3D Drawing Health Check',code:'HEALTH',label:'Training drawing health check',categories:['project','cad'],summary:'Checks Civil 3D training drawings for setup and drawing health issues.',meta:'AutoCAD scripting · Civil 3D'},
  {name:'Civil 3D Training Drawing Builder',code:'BUILD',label:'Training drawing builder',categories:['project','cad'],summary:'Builds Civil 3D training drawings from a repeatable scripted configuration.',meta:'PowerShell · Civil 3D'}
];

const excelAutomations = new Set([
  'Clifty Creek Master Workbook Updater',
  'MTEXT Workbook Sorter',
  'DAR Field Reporting App',
  'DAR Email-to-Workbook Pipeline',
  'QA/QC Elevation Workbooks',
  'Receipt Parser & Expense Grouper',
  'Phase Code Workbook Splitter',
  'Hermes DAR Controller',
  'Excel DAR RowHider',
  'OCR Ticket Scanner',
  'Viewpoint–DAR Time Audit',
  'Sign-In Sheet Cleanup',
  'Jobsite Field Map Builder'
]);
automations.forEach((automation) => {
  if (excelAutomations.has(automation.name) && !automation.categories.includes('excel')) automation.categories.push('excel');
});
const automationImages = {
  "Custom Grid Maker": [
    [
      "assets/automations/custom-grid-maker.png",
      "AutoCAD treatment grid layout with rectangular work areas and grid labels"
    ]
  ],
  "Grid Duplicate Cleanup": [
    [
      "assets/automations/grid-duplicate-cleanup.png",
      "AutoCAD treatment-grid drawing showing adjacent labeled grid cells used for duplicate-grid cleanup"
    ]
  ],
  "Grid Label Duplicate Checker": [
    [
      "assets/automations/grid-label-duplicate-checker.png",
      "AutoCAD treatment-grid drawing showing adjacent grid cells with distinct labels for duplicate-label checking"
    ]
  ],
  "Hyperlink Grid Labeler": [
    [
      "assets/automations/hyperlink-grid-labeler.png",
      "AutoCAD treatment-grid drawing with centered grid labels generated from hyperlink identifiers"
    ]
  ],
  "DAR Area Export": [
    [
      "assets/automations/dar-area-export-table.png",
      "Exported spreadsheet table listing treatment-grid identifiers and calculated areas"
    ],
    [
      "assets/automations/dar-area-export-grid.png",
      "AutoCAD drawing showing the labeled treatment grids used to calculate the exported areas"
    ]
  ],
  "Treated Grid Center Export": [
    [
      "assets/automations/treated-grid-center-export.png",
      "AutoCAD drawing with red treatment-grid outlines and marked center points labeled for export"
    ]
  ],
  "Trimble TSC7 Data Puller": [
    [
      "assets/automations/trimble-tsc7-data-puller.png",
      "Trimble Siteworks screen showing Point Manager, control-point editing, and point-file import tools"
    ]
  ],
  "Outlook Daily Summary": [
    [
      "assets/automations/outlook-daily-summary.png",
      "Seven-day Outlook email summary organized into action items, project updates, travel and administration, and skipped noise, with personal names blurred"
    ]
  ],
  "StretchLeader": [
    [
      "assets/automations/stretchleader.png",
      "Before-and-after diagram showing a multileader extended to a consistent longer length"
    ]
  ],
  "PDF Steamroller": [
    [
      "assets/automations/pdf-steamroller.png",
      "PDF Steamroller command-line application with an AutoCAD PDF file-selection window open"
    ]
  ],
  "Photo Compressor": [
    [
      "assets/automations/photo-compressor.png",
      "Photo Compressor desktop app with folder selection, save location, compression level, results, and progress controls"
    ]
  ],
  "DAR Field Reporting App": [
    [
      "assets/automations/dar-dashboard.png",
      "Daily Activity Report dashboard with controls to start a report, manage contacts, and refresh the field roster"
    ],
    [
      "assets/automations/dar-site-details.png",
      "Field Report site-details screen for weather, pumping, subcontractors, and deliveries"
    ],
    [
      "assets/automations/dar-notes.png",
      "Field Report notes screen organized by T and M, WBSP, landfill, and LRCP work areas"
    ]
  ],
  "MasterFlow Cut / Fill Heat Map": [
    [
      "assets/automations/masterflow-cut-fill-heat-map.png",
      "Representative cut and fill heat map using sample grading data"
    ]
  ],
  "Viewpoint–DAR Time Audit": [
    [
      "assets/automations/viewpoint-dar-time-audit.png",
      "Representative time audit workbook using anonymous sample crew data"
    ]
  ],
  "EOD Grid Change": [
    [
      "assets/automations/end-of-day-grid-change.png",
      "AutoCAD treatment-grid drawing showing completed grids changed from magenta to black with yellow change markers"
    ]
  ]
};

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
const grid = document.querySelector('[data-automation-grid]');
if (grid) {
  grid.innerHTML = automations.map((automation) => {
    const search = [automation.name, automation.label, automation.summary, automation.meta, ...automation.categories].join(' ').toLowerCase();
    const status = automation.status ? `<span class="automation-status">${escapeHtml(automation.status)}</span>` : '';
    const images = automationImages[automation.name];
    const gallery = images?.length ? `<div class="automation-gallery">${images.map(([src, alt]) =>
      `<a href="${escapeHtml(src)}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" /></a>`
    ).join('')}</div>` : '';
    return `<article class="automation-card" data-automation data-category="${automation.categories.join(' ')}" data-search="${escapeHtml(search)}">
      <details><summary><span class="automation-category">${escapeHtml(automation.label)}</span><h2>${escapeHtml(automation.name)}</h2><span class="automation-meta">${escapeHtml(automation.meta)}</span></summary>
      <div class="automation-description">
        <p>${escapeHtml(automation.summary)}</p>
        ${gallery}
        ${status}
      </div></details>
    </article>`;
  }).join('');
}
