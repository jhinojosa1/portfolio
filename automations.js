const automations = [
  {name:'Auto Grid Maker',code:'GRID',label:'CAD data automation',categories:['cad','data'],summary:'Filters daily point CSVs by date, removes duplicate point IDs, and produces one clean grid-ready file.',meta:'AutoLISP · CSV'},
  {name:'Custom Grid Maker',code:'AREA',label:'CAD layout automation',categories:['cad'],summary:'Draws a rectangular grid or panel of a specified area from two alignment points.',meta:'AutoLISP · AutoCAD'},
  {name:'EOD Grid Change',code:'EOD',label:'CAD workflow automation',categories:['cad'],summary:'Detects grids containing COGO points and promotes them from Unmixed to the next production state.',meta:'AutoLISP · Civil 3D'},
  {name:'Grid Duplicate Cleanup',code:'DUPE',label:'CAD quality automation',categories:['cad'],summary:'Finds and removes duplicate grid polylines, including duplicates that sit on different layers.',meta:'AutoLISP · AutoCAD'},
  {name:'Grid Label Duplicate Checker',code:'QA',label:'CAD quality automation',categories:['cad'],summary:'Finds repeated MTEXT grid labels before a drawing is submitted.',meta:'AutoLISP · MTEXT'},
  {name:'Grid Automation Notebook',code:'BATCH',label:'CAD data automation',categories:['cad','data'],summary:'Runs repeatable batch grid operations from CSV inputs in a reviewable notebook workflow.',meta:'Python · Jupyter · CSV'},
  {name:'Grid Counting Vision Tool',code:'CV',label:'Computer-vision automation',categories:['cad','ai'],summary:'Counts grid cells from plan screenshots using image-processing techniques.',meta:'Python · OpenCV · Jupyter'},
  {name:'Hyperlink Grid Labeler',code:'LINK',label:'CAD labeling automation',categories:['cad'],summary:'Reads polyline hyperlink values and creates centered grid labels from them.',meta:'AutoLISP · MTEXT'},
  {name:'Layer List',code:'LAYR',label:'CAD diagnostic utility',categories:['cad','utility'],summary:'Lists every drawing layer to make drawing diagnostics and standards reviews faster.',meta:'AutoLISP · AutoCAD'},
  {name:'Layer Maker',code:'MAKE',label:'CAD setup automation',categories:['cad'],summary:'Batch-creates drawing layers from a reusable text definition file.',meta:'AutoLISP · AutoCAD'},
  {name:'Layer Change / Turnover',code:'MOVE',label:'CAD turnover automation',categories:['cad'],summary:'Moves selected entities into the correct turnover-state layers without repetitive manual changes.',meta:'AutoLISP · AutoCAD'},
  {name:'Layout Generator',code:'LAY',label:'CAD sheet automation',categories:['cad'],summary:'Builds named layouts and applies viewport layer overrides from a reusable definition.',meta:'AutoLISP · Paper space'},
  {name:'Auto Labeler',code:'LBL',label:'CAD labeling automation',categories:['cad'],summary:'Places sequential two-line MTEXT labels at selected drawing points.',meta:'AutoLISP · MTEXT'},
  {name:'Turnover Automation',code:'TURN',label:'CAD turnover platform',categories:['cad'],summary:'Creates turnover hatches and IWP layers and identifies point-to-IWP relationships in one end-of-day workflow.',meta:'AutoLISP · Civil 3D'},
  {name:'DAR Area Export',code:'AREA',label:'DAR CAD automation',categories:['cad','reporting'],summary:'Calculates labeled polygon areas and exports clean CSV records for daily reporting.',meta:'AutoLISP · CSV'},
  {name:'DAR Center Point Export',code:'CTR',label:'DAR data automation',categories:['cad','data'],summary:'Exports polygon centroids in a COGO-compatible CSV format.',meta:'AutoLISP · COGO · CSV'},
  {name:'DAR Draw-Order Cleanup',code:'ORDER',label:'DAR CAD automation',categories:['cad'],summary:'Brings completed grids forward for reporting without changing their geometry.',meta:'AutoLISP · AutoCAD'},
  {name:'DAR Volume Calculator',code:'VOL',label:'DAR quantity automation',categories:['cad','data','reporting'],summary:'Pairs polygon areas with depth labels to calculate report-ready material volumes.',meta:'AutoLISP · Quantity takeoff'},
  {name:'AutoCAD Point Extract',code:'PTS',label:'CAD data extraction',categories:['cad','data'],summary:'Exports point-entity coordinates and attributes from an active drawing.',meta:'AutoLISP · AutoCAD'},
  {name:'Area / Takeoff Calculator',code:'QTY',label:'Quantity automation',categories:['cad','data'],summary:'Calculates polygon areas by layer with CSV and IWP-grouped output modes.',meta:'AutoLISP · CSV · IWP'},
  {name:'Hatch Boundary Extractor',code:'HATCH',label:'CAD geometry extraction',categories:['cad','data'],summary:'Recovers hatch-boundary vertex coordinates for downstream analysis and QA.',meta:'AutoLISP · AutoCAD'},
  {name:'MTEXT CSV Exporter',code:'TEXT',label:'CAD data extraction',categories:['cad','data'],summary:'Exports cleaned multiline MTEXT values from a selected drawing layer to CSV.',meta:'AutoLISP · MTEXT · CSV'},
  {name:'KML Generator',code:'KML',label:'Geospatial automation',categories:['cad','data'],summary:'Converts Louisiana State Plane polygon coordinates to WGS84 KML.',meta:'AutoLISP · Coordinate conversion'},
  {name:'Point-to-Hatch Classifier',code:'CLASS',label:'Spatial data automation',categories:['cad','data'],summary:'Identifies which hatch region contains each point and produces structured classifications.',meta:'Python · Jupyter · Geometry'},
  {name:'Polyline-to-Table',code:'TABLE',label:'CAD documentation automation',categories:['cad','data'],summary:'Turns polyline vertices into an AutoCAD table, with an external COM batch mode for larger runs.',meta:'AutoLISP · Python · COM'},
  {name:'Coordinate Picker',code:'XY',label:'CAD utility',categories:['cad','utility'],summary:'Returns precise X and Y coordinates for a selected drawing point.',meta:'AutoLISP · AutoCAD'},
  {name:'EOD Cleanup',code:'CLEAN',label:'End-of-day CAD automation',categories:['cad'],summary:'Deletes temporary COGO points and promotes production grids to their completed state.',meta:'AutoLISP · Civil 3D'},
  {name:'EOD Complete',code:'DONE',label:'End-of-day CAD workflow',categories:['cad'],summary:'Chains grid promotion and drawing cleanup into one repeatable command.',meta:'AutoLISP · Civil 3D'},
  {name:'Site Map Draw-Order Cleanup',code:'MAP',label:'CAD cleanup automation',categories:['cad'],summary:'Sends grid layers behind site-map content so drawing presentation stays consistent.',meta:'AutoLISP · AutoCAD'},
  {name:'Stray Polyline Finder',code:'OPEN',label:'CAD quality automation',categories:['cad'],summary:'Finds and counts unclosed polylines that require correction.',meta:'AutoLISP · QA'},
  {name:'Completed Grid QA Check',code:'CHECK',label:'CAD quality automation',categories:['cad'],summary:'Produces a verification list of grids marked complete before turnover.',meta:'AutoLISP · QA'},
  {name:'AutoLISP Unloader',code:'UNLOAD',label:'Developer utility',categories:['cad','utility'],summary:'Unloads user-defined LISP commands without restarting AutoCAD.',meta:'AutoLISP · AutoCAD'},
  {name:'Inward Offset',code:'INSET',label:'CAD geometry automation',categories:['cad'],summary:'Offsets multiple closed polylines strictly toward their interiors.',meta:'AutoLISP · AutoCAD'},
  {name:'XREF Reload All',code:'XREF',label:'CAD utility',categories:['cad','utility'],summary:'Reloads every attached external reference with a single command.',meta:'AutoLISP · AutoCAD'},
  {name:'Clifty Creek Master Workbook Updater',code:'BOOK',label:'Excel data automation',categories:['data','reporting'],summary:'Replaces or key-updates a target workbook sheet from CSV or Excel source data.',meta:'Python · Excel · CSV'},
  {name:'Daily Point CSV Processor',code:'CSV',label:'Field data automation',categories:['data','field'],summary:'Filters daily point rows by date, removes duplicates, and merges them for end-of-day processing.',meta:'Python · Tkinter · CSV'},
  {name:'DXF Fast Takeoff',code:'DXF',label:'Quantity automation',categories:['cad','data'],summary:'Counts and measures hatches contained within selected DXF boundary regions.',meta:'Python · ezdxf'},
  {name:'Live AutoCAD MTEXT Extractor',code:'LIVE',label:'CAD integration automation',categories:['cad','data'],summary:'Controls a running AutoCAD session and extracts MTEXT in batches.',meta:'Python · pywin32 · COM'},
  {name:'MTEXT Workbook Sorter',code:'SORT',label:'Excel organization automation',categories:['data','reporting'],summary:'Organizes extracted drawing labels into categorized, multi-sheet Excel workbooks.',meta:'Python · Excel'},
  {name:'Polygon Partitioner',code:'SPLIT',label:'CAD geometry automation',categories:['cad'],summary:'Divides a selected AutoCAD polygon into practical sub-polygons through an external controller.',meta:'Python · pywin32 · COM'},
  {name:'Trimble TSC7 Data Puller',code:'TSC7',label:'Survey data automation',categories:['field','data'],summary:'Selects work orders, preserves raw survey files, cleans their data, and creates dated outputs.',meta:'Python · Desktop UI'},
  {name:'CAT VisionLink Fault Report Pipeline',code:'CAT',label:'Equipment reporting automation',categories:['reporting','data'],summary:'Cleans VisionLink fault exports and produces formatted fault-code and seatbelt PDF reports.',meta:'Python · Playwright · PDF',status:'In development'},
  {name:'DAR Field Reporting App',code:'DAR',label:'Field reporting platform',categories:['field','apps','reporting'],summary:'Captures personnel, hours, equipment, areas, notes, recipients, review, and delivery in one mobile workflow.',meta:'Power Apps · Power Fx · Outlook'},
  {name:'Load Count Log',code:'LOAD',label:'Field operations app',categories:['field','apps'],summary:'Structures daily material-haul and load entries for fast field submission and tracking.',meta:'Power Apps · SharePoint'},
  {name:'DAR Email-to-Workbook Pipeline',code:'FILL',label:'Report production automation',categories:['reporting','data','ai'],summary:'Extracts structured DAR emails, reviews wording locally, fills Excel logs and photos, and records each run.',meta:'Python · Outlook · Excel · Ollama'},
  {name:'QA/QC Elevation Workbooks',code:'QAQC',label:'Survey quality automation',categories:['reporting','data','field'],summary:'Builds daily survey-versus-design workbooks with tolerances, duplicate checks, dashboards, and exports.',meta:'Python · Excel · Survey data'},
  {name:'PDF Compressor',code:'PDF',label:'Document utility',categories:['utility','reporting'],summary:'Reduces PDF sizes through email and print presets while protecting transparent imagery.',meta:'Python · Windows desktop'},
  {name:'Outlook Daily Summary',code:'MAIL',label:'Email intelligence automation',categories:['reporting','ai'],summary:'Builds focused Outlook digests, extracts categorized actions, and routes them into local work notes.',meta:'Python · Outlook COM · Obsidian',status:'In development'},
  {name:'Receipt Parser & Expense Grouper',code:'EXP',label:'Expense data automation',categories:['data','reporting'],summary:'Extracts vendor, date, amount, and payment card from receipts and creates per-card Excel reports.',meta:'Python · PDF · Excel'},
  {name:'Receipt / Ticket OCR Renamer',code:'OCR',label:'Document OCR automation',categories:['data','ai','utility'],summary:'Splits scanned PDFs, reads dates and totals with OCR, and applies consistent page names.',meta:'Python · Tesseract · PDF'},
  {name:'Fuel Ticket Scanner',code:'FUEL',label:'Field ticket automation',categories:['field','data'],summary:'Extracts Atlas flags, ticket numbers, and gallon quantities from fuel-ticket PDFs.',meta:'Python · OCR · PDF'},
  {name:'Phase Code Workbook Splitter',code:'PHASE',label:'Job-cost workbook automation',categories:['data','reporting'],summary:'Turns a payroll or job-cost CSV into a formatted Excel tab for each phase code.',meta:'Python · CSV · Excel'},
  {name:'Local Whisper Dictation',code:'VOICE',label:'Local AI utility',categories:['ai','utility'],summary:'Provides offline GPU speech-to-text with a global hotkey and automatic typing or clipboard output.',meta:'Python · Whisper · GPU'},
  {name:'Optimal Work Dashboard',code:'FOCUS',label:'Personal workflow app',categories:['apps'],summary:'Combines tasks, checklists, focus sessions, timers, and reflection in a local desktop dashboard.',meta:'Desktop app · SQLite'},
  {name:'AutoCAD LISP Test Harness',code:'TEST',label:'CAD developer platform',categories:['cad','utility'],summary:'Loads and runs LISP in Civil 3D, captures errors and logs, and evaluates reusable YAML test cards.',meta:'Python · Civil 3D · YAML'},
  {name:'ENTACT Civil 3D Assistant',code:'C3D',label:'Local AI CAD assistant',categories:['cad','ai','apps'],summary:'Plans and confirms drafting actions through a local model with handlers and auditable execution logs.',meta:'C# · .NET 8 · Civil 3D · Local AI'},
  {name:'MasterFlow Cut / Fill Heat Map',code:'HEAT',label:'Surface analysis automation',categories:['cad','data'],summary:'Imports LandXML surfaces and a boundary, creates a volume surface, and applies cut/fill color bands in one command.',meta:'C# · Civil 3D API · LandXML'},
  {name:'Panel Layout Generator',code:'PANEL',label:'CAD layout automation',categories:['cad'],summary:'Groups named layout points into closed panel polylines with centered labels.',meta:'Python · AutoCAD'},
  {name:'Panel Vertex Extractor',code:'VERT',label:'CAD data extraction',categories:['cad','data'],summary:'Scans labeled closed panels and exports consistently named vertices to CSV.',meta:'Python · ezdxf · AutoLISP'},
  {name:'Surface Elevation Corrector',code:'ELEV',label:'Civil 3D data automation',categories:['cad','data'],summary:'Samples point locations against a TIN surface and exports corrected elevations without modifying source points.',meta:'AutoLISP · Civil 3D API'},
  {name:'MTEXT Grid Maker',code:'MTXT',label:'CAD labeling automation',categories:['cad'],summary:'Places a fixed name list as evenly spaced MTEXT in a square grid.',meta:'AutoLISP · AutoCAD'},
  {name:'Hermes DAR Controller',code:'MERGE',label:'Report orchestration automation',categories:['reporting','data'],summary:'Imports multiple manager emails, merges their content, flags conflicts, and creates an approved DAR from an unchanged template.',meta:'Excel VBA · Python · EML'},
  {name:'Excel DAR RowHider',code:'ROWS',label:'Excel formatting automation',categories:['reporting','data'],summary:'Hides unused daily-report rows and restores rows automatically when content is added.',meta:'Excel VBA · PowerShell'},
  {name:'Universal Grid Leader Maker',code:'LEAD',label:'CAD labeling and QA',categories:['cad'],summary:'Matches labels to closed repair grids, creates native multileaders, and produces QA reports.',meta:'AutoLISP · Python · ezdxf'},
  {name:'MLeader Text Point Exporter',code:'MLEAD',label:'Survey data extraction',categories:['cad','data'],summary:'Exports multileader text and arrow-point coordinates to survey-style CSV.',meta:'AutoLISP · Civil 3D · CSV'},
  {name:'Point Raw Description Leader',code:'DESC',label:'Civil 3D labeling automation',categories:['cad'],summary:'Creates native multileader labels from COGO-point raw descriptions.',meta:'AutoLISP · Civil 3D ActiveX'},
  {name:'StretchLeader',code:'STRETCH',label:'CAD annotation automation',categories:['cad'],summary:'Normalizes native multileader lengths in batches without rebuilding leaders or changing text.',meta:'AutoLISP · AutoCAD ActiveX'},
  {name:'LandXML Surface Combiner',code:'SURF',label:'Surface data automation',categories:['cad','data'],summary:'Combines multiple TIN surfaces while retaining the controlling surface footprint.',meta:'Python · LandXML'},
  {name:'DXF Audit',code:'AUDIT',label:'Drawing analysis utility',categories:['cad','data'],summary:'Produces structured drawing, entity, and layer information before automation is applied.',meta:'Python · ezdxf'},
  {name:'Grid Label Audit',code:'LABEL',label:'CAD quality automation',categories:['cad'],summary:'Identifies missing, duplicate, and orphaned relationships between grids and labels.',meta:'Python · ezdxf'},
  {name:'LandXML Validator',code:'VALID',label:'Surface quality automation',categories:['cad','data'],summary:'Checks generated LandXML surfaces for structural and geometry problems before Civil 3D import.',meta:'Python · XML · LandXML'},
  {name:'PNEZD Writer',code:'PNEZD',label:'Survey file automation',categories:['data','field'],summary:'Writes standardized survey point files for downstream CAD and field workflows.',meta:'Python · CSV · Survey data'},
  {name:'OCR Ticket Scanner',code:'SCAN',label:'Field capture app',categories:['apps','field','data'],summary:'Captures ticket images, queues OCR results for approval, and appends approved records to Excel Online.',meta:'Power Apps · OCR · SharePoint'},
  {name:'PDF Steamroller',code:'FLAT',label:'PDF repair utility',categories:['utility'],summary:'Rasterizes and compresses difficult AutoCAD-exported PDFs into smaller, more reliable files.',meta:'Python · PDF · Image processing'},
  {name:'Photo Compressor',code:'PHOTO',label:'Field media utility',categories:['utility','field'],summary:'Batch-compresses field photos while preserving originals, metadata, folders, multipage TIFFs, and animated GIFs.',meta:'Python · Pillow · Tkinter'},
  {name:'Viewpoint–DAR Time Audit',code:'TIME',label:'Labor audit automation',categories:['reporting','data'],summary:'Compares employee timesheets with DAR personnel hours and produces an exception-focused workbook.',meta:'Python · PDF · Excel'},
  {name:'Sign-In Sheet Cleanup',code:'SIGN',label:'Excel document automation',categories:['data','reporting'],summary:'Resizes a sign-in form to its personnel list, adds blank rows, and prepares a one-page printout.',meta:'Excel VBA · PowerShell'},
  {name:'Jobsite Field Map Builder',code:'MAP',label:'Field planning automation',categories:['field','data'],summary:'Builds an Excel visual tracker for personnel, equipment, and jobsite areas from CAD boundaries.',meta:'Python · Excel · DXF'},
  {name:'Point Shape MLeader',code:'SHAPE',label:'CAD labeling automation',categories:['cad'],summary:'Converts labeled point groups into closed polylines and multileader callouts.',meta:'CAD workflow',status:'In development'},
  {name:'WBSP V-Ditch Surface Generator',code:'DITCH',label:'Project CAD workflow',categories:['project','cad'],summary:'Generates a repeatable Civil 3D surface workflow for the WBSP V-ditch design.',meta:'Civil 3D · Surface design'},
  {name:'LRCP V-Ditch Design Workflow',code:'LRCP',label:'Project CAD workflow',categories:['project','cad'],summary:'Applies a repeatable grading and surface workflow to the LRCP V-ditch design.',meta:'Civil 3D · Grading'},
  {name:'WBSP Lime-Mixing LandXML Generator',code:'LIME',label:'Project surface workflow',categories:['project','cad','data'],summary:'Creates LandXML surfaces for WBSP lime-mixing grid work from project inputs.',meta:'Python · LandXML · Civil 3D'},
  {name:'Landfill Grid MTEXT QA',code:'LFQA',label:'Project QA workflow',categories:['project','cad'],summary:'Checks landfill repair-grid MTEXT and geometry for missing or inconsistent labels.',meta:'AutoCAD · QA'},
  {name:'As-Built Drainage QA Highlighter',code:'DRAIN',label:'Project QA workflow',categories:['project','cad','data'],summary:'Highlights drainage as-built point conditions that require engineering review.',meta:'Civil 3D · Survey QA'},
  {name:'Civil 3D Drawing Health Check',code:'HEALTH',label:'Training CAD workflow',categories:['project','cad'],summary:'Runs a repeatable diagnostic review of Civil 3D training drawings.',meta:'AutoLISP · Civil 3D'},
  {name:'Civil 3D Training Drawing Builder',code:'BUILD',label:'Training automation',categories:['project','cad'],summary:'Builds repeatable Civil 3D training drawings through a scripted setup workflow.',meta:'PowerShell · Civil 3D'}
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
const impactFiveAutomations = new Set([
  'Turnover Automation',
  'Trimble TSC7 Data Puller',
  'CAT VisionLink Fault Report Pipeline',
  'DAR Field Reporting App',
  'Load Count Log',
  'DAR Email-to-Workbook Pipeline',
  'QA/QC Elevation Workbooks',
  'ENTACT Civil 3D Assistant',
  'MasterFlow Cut / Fill Heat Map',
  'Hermes DAR Controller',
  'Viewpoint–DAR Time Audit',
  'Jobsite Field Map Builder',
  'WBSP V-Ditch Surface Generator',
  'LRCP V-Ditch Design Workflow',
  'WBSP Lime-Mixing LandXML Generator',
  'As-Built Drainage QA Highlighter'
]);
const impactOneAutomations = new Set([
  'Layer List',
  'Coordinate Picker',
  'AutoLISP Unloader',
  'XREF Reload All',
  'Site Map Draw-Order Cleanup',
  'Completed Grid QA Check'
]);
const impactFor = (automation) => {
  if (impactFiveAutomations.has(automation.name)) return 5;
  if (impactOneAutomations.has(automation.name)) return 1;
  const has = (category) => automation.categories.includes(category);
  if (has('apps') || (has('reporting') && has('data')) || (has('field') && has('data')) || (has('cad') && has('ai'))) return 4;
  if (['field','reporting','data','ai'].some(has)) return 3;
  return 2;
};
const impactDescriptions = {
  1: 'Small utility with targeted task-level impact',
  2: 'Focused productivity improvement',
  3: 'Recurring workflow improvement',
  4: 'Multi-step operational impact',
  5: 'Team-scale or business-critical impact'
};

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
const grid = document.querySelector('[data-automation-grid]');
if (grid) {
  grid.innerHTML = automations.map((automation, index) => {
    const number = String(index + 1).padStart(2, '0');
    const search = [automation.name, automation.label, automation.summary, automation.meta, ...automation.categories].join(' ').toLowerCase();
    const action = '<span class="automation-private">Private automation</span>';
    const status = automation.status ? `<span class="automation-status">${escapeHtml(automation.status)}</span>` : '';
    const impact = impactFor(automation);
    const impactBars = Array.from({length:5}, (_, index) => `<i class="${index < impact ? 'is-filled' : ''}"></i>`).join('');
    const impactBadge = `<span class="impact-indicator impact-${impact}" title="${escapeHtml(impactDescriptions[impact])}" aria-label="Impact ${impact} out of 5"><span>Impact</span><span class="impact-meter" aria-hidden="true">${impactBars}</span><b>${impact}/5</b></span>`;
    return `<article class="automation-card" data-automation data-category="${automation.categories.join(' ')}" data-search="${escapeHtml(search)}">
      <div class="automation-visual"><span class="automation-code">JH / ${number}</span><strong>${escapeHtml(automation.code)}</strong><i></i></div>
      <div class="automation-content"><div class="automation-heading"><p class="automation-category">${escapeHtml(automation.label)}</p><div class="automation-signals">${impactBadge}${status}</div></div><h2>${escapeHtml(automation.name)}</h2><p>${escapeHtml(automation.summary)}</p><div class="automation-footer"><span>${escapeHtml(automation.meta)}</span>${action}</div></div>
    </article>`;
  }).join('');
}