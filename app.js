// Default Portfolio Template Data
const DEFAULT_DATA = {
    profile: {
        name: "Sonali Deb",
        title: "Data Science & Artificial Intelligence Engineer",
        tagline: "Specializing in Intelligent Systems & Multi-Agent Orchestration",
        summary: "A dedicated Computer Science and Engineering professional specializing in Artificial Intelligence and Machine Learning. Proven expertise in architecting intelligent systems, multi-agent orchestration layers, and computer vision applications. Experienced in implementing industry-standard Software Development Life Cycles (SDLC) and CI/CD pipelines to build scalable, production-ready solutions. Active technical freelancer delivering high-quality, custom engineering solutions.",
        figmaLink: "https://www.figma.com/proto/fWnm391SYnSgpqhk8HzcnG/Untitled?node-id=3-2&starting-point-node-id=3%3A2&t=LUQxetgC1n4r4XjV-1",
        figmaDesc: "Figma Interactive Prototype: View Case Study & Wireframes (Google UX Design Professional Certificate)."
    },
    skills: {
        "AI & Machine Learning": ["Generative AI", "Retrieval-Augmented Generation (RAG)", "Computer Vision", "PyTorch", "TensorFlow", "OpenCV", "ResNet50V2"],
        "Languages": ["Python", "C++", "C"],
        "Data & Analytics": ["Data Structures", "MySQL", "Microsoft Power BI", "Advanced DAX", "Excel"],
        "Cloud & DevOps": ["Docker", "Google Cloud Run", "Oracle Cloud Infrastructure (OCI)", "Git"],
        "Design & Fundamentals": ["UI/UX Design (Figma)", "Operating Systems", "Computer Networks", "OOPs"],
        "Methodologies": ["SDLC", "CI/CD Pipelines", "Agile Practices"]
    },
    projects: [
        {
            id: "gharkanutri",
            title: "GharKaNutri: GenAI Clinical Nutrition Platform",
            category: "ai-ml",
            desc: "Architected an intelligent healthcare application to automate complex metabolic mathematics, parse diagnostic laboratory reports, and dynamically generate region-specific Indian dietary guidelines for chronic illness management.",
            engineering: "Engineered a Retrieval-Augmented Generation (RAG) pipeline utilizing Gemini to extract critical lab biomarkers and accurately map them against localized disease and regional staple food databases. Programmatically injected contextual medical and regional data into LLM system prompts to ensure accurate, safe, and highly personalized menu curation.",
            stack: ["React (Vite)", "Tailwind CSS", "Node.js", "Express", "@google/genai SDK", "RAG"],
            liveUrl: "https://indian-household-nutritionist-and-diet-planner-974916806414.asia-southeast1.run.app/"
        },
        {
            id: "amazon-next-gen",
            title: "Amazon Next-Gen: Multi-Agent Systems",
            category: "web-apps",
            desc: "Architected a high-performance analytics platform to enhance operational feasibility and strategic decision-making tools for e-commerce sellers.",
            engineering: "Engineered a multi-agent orchestration layer to automate data ingestion and financial modeling, ensuring total compliance with region-specific tax logic. Optimized deployment latency via containerized Docker architecture on Google Cloud Run, providing real-time process visualization.",
            stack: ["React 19", "Node.js", "Docker", "Google Cloud Run"],
            liveUrl: "http://amazon-next-gen.vercel.app/"
        },
        {
            id: "dog-breed",
            title: "Dog Breed Classification: Computer Vision",
            category: "ai-ml",
            desc: "Developed a high-accuracy classification system leveraging transfer learning to accurately categorize diverse dog breeds.",
            engineering: "Refined the model pipeline to achieve superior top-k classification results while maintaining minimal inference latency. Evaluated the prototype against diverse datasets to troubleshoot edge-case failure modes and ensure adherence to performance metrics.",
            stack: ["Transfer Learning", "ResNet50V2", "TensorFlow", "OpenCV"],
            liveUrl: "https://dog-breed-prediction-mteh.vercel.app/"
        },
        {
            id: "silent-to-speech",
            title: "Silent To Speech Application: Whisper & Bark",
            category: "ai-ml",
            desc: "Built a scalable, language-agnostic backend pipeline to facilitate real-time audio processing and low-latency speech synthesis.",
            engineering: "Enhanced system efficiency by integrating GPU support and caching for Whisper (ASR) and Bark (TTS) models. Implemented noise suppression techniques with RNNoise and FFmpeg to maintain high-quality output.",
            stack: ["Python", "PyTorch", "Whisper (ASR)", "Bark (TTS)", "RNNoise", "FFmpeg"],
            liveUrl: "https://speech-application-a638.vercel.app/"
        },
        {
            id: "alertmitra",
            title: "AlertMitra: Asynchronous Disaster Alert",
            category: "web-apps",
            desc: "Created an intelligent disaster notification system providing reliable hyperlocal alerts during emergencies.",
            engineering: "Designed APIs to aggregate and filter high-velocity data from GDACS, USGS, and NASA. Established modular command flows and subscription logic to handle automated safety updates, prioritizing uptime and data accuracy.",
            stack: ["Python", "Telegram Bot API", "NASA APIs", "USGS API"],
            liveUrl: ""
        }
    ],
    experience: [
        {
            date: "Ongoing",
            title: "Freelance Software & AI Engineer",
            org: "Truelancer",
            desc: "Deliver end-to-end technical solutions for global clients, specializing in full-stack development, data analysis, and machine learning pipeline integrations. Translate business logic into technical specifications, utilizing agile practices to deliver codebases under strict timelines."
        }
    ],
    certifications: [
        { title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", org: "Oracle (Score: 95%)", icon: "☁️" },
        { title: "Microsoft Power BI Master Class", org: "Alison (Score: 83%)", icon: "📊" },
        { title: "Google UX Design Professional Certificate", org: "Coursera (Foundations & User Research)", icon: "🎨" }
    ],
    achievements: [
        { title: "Finalist, 0 to 1 Ideathon by IIIT Delhi", desc: "Project: Memora Application", icon: "💡" },
        { title: "Finalist, HackCrux by LNMIIT Jaipur", desc: "Project: AlertMitra", icon: "🚨" },
        { title: "Visharad in Vocal Music", desc: "Classical Training (Score: 68%)", icon: "🎵" }
    ],
    education: [
        {
            date: "2022 – 2026",
            title: "B.Tech in Computer Science & Engineering (Minor: AI & ML)",
            org: "Amity University Madhya Pradesh",
            desc: "CGPA: 7.72"
        },
        {
            date: "2022",
            title: "Class XII (CBSE)",
            org: "High School Certification",
            desc: "Percentage: 70.2%"
        },
        {
            date: "2020",
            title: "Class X (CBSE)",
            org: "Secondary Education",
            desc: "Percentage: 76.4%"
        }
    ],
    languages: ["English", "Hindi", "Bengali", "French"],
    interests: ["Vocal Music", "Technical Documentation", "Critical Problem Solving"]
};

// Global App State
let state = {};
let isViewMode = false; // default editor mode

// DOM Elements
const body = document.body;
const controlBar = document.getElementById('control-bar');
const projectsGrid = document.getElementById('projects-grid');
const figmaIframeContainer = document.getElementById('figma-iframe-container');
const timelineExpCol = document.getElementById('timeline-experience');
const timelineEduCol = document.getElementById('timeline-education');
const skillsGrid = document.getElementById('skills-grid');
const certsGridContainer = document.getElementById('certs-grid');
const achievementsGridContainer = document.getElementById('achievements-grid');
const languagesContainer = document.getElementById('languages-list');
const interestsContainer = document.getElementById('interests-list');

// Compression and Encoding Helpers (GZIP base64url)
async function compressData(data) {
    const string = JSON.stringify(data);
    const blob = new Blob([string], { type: 'application/json' });
    const stream = blob.stream().pipeThrough(new CompressionStream('gzip'));
    const compressedBlob = await new Response(stream).blob();
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result.split(',')[1]
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
            resolve(base64);
        };
        reader.readAsDataURL(compressedBlob);
    });
}

async function decompressData(base64String) {
    try {
        let base64 = base64String.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
            base64 += '=';
        }
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
        const decompressedText = await new Response(stream).text();
        return JSON.parse(decompressedText);
    } catch (e) {
        console.error("Failed to decompress content state.", e);
        return null;
    }
}

// Utility to set value dynamically in nested objects
function setValueByPath(obj, path, value) {
    const parts = path.split('.');
    const last = parts.pop();
    const parent = parts.reduce((acc, part) => {
        if (!acc[part]) acc[part] = {};
        return acc[part];
    }, obj);
    if (parent) {
        parent[last] = value;
    }
}

// Save Current State to LocalStorage
function saveLocalDraft() {
    if (!isViewMode) {
        localStorage.setItem('sonali_portfolio_draft', JSON.stringify(state));
    }
}

// Initialise Application State
async function initApp() {
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    
    // Check if loading shared compressed data
    if (hash && hash.startsWith('#data=')) {
        const base64Data = hash.substring(6);
        const decoded = await decompressData(base64Data);
        if (decoded) {
            state = decoded;
            isViewMode = true; // shared links are always read-only
        } else {
            alert("Could not load shared portfolio content. Loading default template.");
            loadTemplate(DEFAULT_DATA);
        }
    } else {
        // Checking URL params for view toggles or local storage
        if (params.get('view') === 'true' || hash === '#view') {
            isViewMode = true;
        }
        
        const localDraft = localStorage.getItem('sonali_portfolio_draft');
        if (localDraft) {
            state = JSON.parse(localDraft);
        } else {
            state = JSON.parse(JSON.stringify(DEFAULT_DATA)); // deep copy default
        }
    }
    
    updateModeClass();
    renderPortfolio();
}

// Update Mode Class on Body and Toggle Toolbar
function updateModeClass() {
    if (isViewMode) {
        body.classList.remove('edit-mode');
        if (controlBar) controlBar.style.display = 'none';
    } else {
        body.classList.add('edit-mode');
        if (controlBar) controlBar.style.display = 'flex';
    }
}

// Rendering Function
function renderPortfolio() {
    // 1. Text Content Mapping (Headers, Titles, Summary)
    document.querySelectorAll('[data-bind]').forEach(el => {
        const path = el.getAttribute('data-bind');
        const val = path.split('.').reduce((acc, part) => acc && acc[part], state);
        el.innerText = val || '';
        
        // Setup content editable
        if (!isViewMode) {
            el.setAttribute('contenteditable', 'true');
            // Listen to edit events
            el.onblur = (e) => {
                setValueByPath(state, path, e.target.innerText.trim());
                saveLocalDraft();
            };
        } else {
            el.removeAttribute('contenteditable');
        }
    });

    // 2. Render Skills
    renderSkills();

    // 3. Render Projects
    renderProjects();

    // 4. Render Experience & Education Timelines
    renderTimeline('experience', timelineExpCol);
    renderTimeline('education', timelineEduCol);

    // 5. Render Certifications
    renderCertifications();

    // 6. Render Achievements
    renderAchievements();

    // 7. Render Languages & Interests (Editable Strings Lists)
    renderEditableList('languages', languagesContainer);
    renderEditableList('interests', interestsContainer);

    // 8. Render Figma Preview
    renderFigmaPreview();
}

// ----------------------------------------------------
// Skill Categories Rendering
// ----------------------------------------------------
function renderSkills() {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = '';

    for (const [category, list] of Object.entries(state.skills)) {
        const catCard = document.createElement('div');
        catCard.className = 'glass-panel skill-category fade-in';
        
        let pillItemsHTML = '';
        list.forEach((skill, idx) => {
            pillItemsHTML += `
                <div class="skill-pill">
                    <span ${!isViewMode ? `contenteditable="true" data-path="skills.${category}.${idx}"` : ''}>${skill}</span>
                    <span class="skill-pill-delete" onclick="deleteSkill('${category}', ${idx})">&times;</span>
                </div>
            `;
        });

        catCard.innerHTML = `
            <h3 class="skill-category-title">
                <span ${!isViewMode ? `contenteditable="true" data-path="skills-title-${category}"` : ''}>${category}</span>
            </h3>
            <div class="skill-list">${pillItemsHTML}</div>
            <div class="add-skill-form">
                <input type="text" placeholder="Add skill..." class="add-skill-input" id="add-skill-input-${category.replace(/\s+/g, '-')}">
                <button class="btn btn-primary" style="padding: 4px 10px; font-size: 0.75rem;" onclick="addSkill('${category}')">+</button>
            </div>
        `;
        skillsGrid.appendChild(catCard);
    }
    
    // Bind editable paths on newly generated skill text spans
    if (!isViewMode) {
        skillsGrid.querySelectorAll('[data-path]').forEach(el => {
            el.onblur = (e) => {
                const path = e.target.getAttribute('data-path');
                if (path.startsWith('skills-title-')) {
                    const oldCat = path.replace('skills-title-', '');
                    const newCat = e.target.innerText.trim();
                    if (newCat && newCat !== oldCat) {
                        state.skills[newCat] = state.skills[oldCat];
                        delete state.skills[oldCat];
                        saveLocalDraft();
                        renderSkills();
                    }
                } else {
                    setValueByPath(state, path, e.target.innerText.trim());
                    saveLocalDraft();
                }
            };
        });
    }
}

function addSkill(category) {
    const input = document.getElementById(`add-skill-input-${category.replace(/\s+/g, '-')}`);
    const val = input.value.trim();
    if (val) {
        state.skills[category].push(val);
        input.value = '';
        saveLocalDraft();
        renderSkills();
    }
}

function deleteSkill(category, index) {
    state.skills[category].splice(index, 1);
    saveLocalDraft();
    renderSkills();
}

// ----------------------------------------------------
// Projects Grid Rendering
// ----------------------------------------------------
function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    // If edit mode, display a card to create a new project
    if (!isViewMode) {
        const addCard = document.createElement('div');
        addCard.className = 'add-card-placeholder fade-in';
        addCard.onclick = createNewProject;
        addCard.innerHTML = `
            <div class="add-card-icon">+</div>
            <div class="add-card-text">Add New Project</div>
        `;
        projectsGrid.appendChild(addCard);
    }

    state.projects.forEach((proj, idx) => {
        const card = document.createElement('div');
        card.className = 'glass-panel project-card fade-in';
        card.setAttribute('data-category', proj.category || 'ai-ml');
        
        let tagsHTML = '';
        proj.stack.forEach((tech, sIdx) => {
            tagsHTML += `
                <span class="project-tag">
                    <span ${!isViewMode ? `contenteditable="true" data-path="projects.${idx}.stack.${sIdx}"` : ''}>${tech}</span>
                    <span class="skill-pill-delete" onclick="deleteProjectTag(${idx}, ${sIdx})">&times;</span>
                </span>
            `;
        });

        card.innerHTML = `
            <div class="card-actions">
                <button class="icon-btn icon-btn-delete" title="Delete Project" onclick="deleteProject(${idx})">🗑️</button>
            </div>
            <div>
                <span class="project-icon">🚀</span>
                <h3 class="project-title" ${!isViewMode ? `contenteditable="true" data-path="projects.${idx}.title"` : ''}>${proj.title}</h3>
                <div class="project-body">
                    <p class="project-desc" ${!isViewMode ? `contenteditable="true" data-path="projects.${idx}.desc"` : ''}>${proj.desc}</p>
                    <div class="project-details">
                        <strong>Engineering:</strong> 
                        <span ${!isViewMode ? `contenteditable="true" data-path="projects.${idx}.engineering"` : ''}>${proj.engineering}</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="project-tags" style="margin-bottom: 20px;">
                    ${tagsHTML}
                    ${!isViewMode ? `<button class="btn btn-secondary" style="padding: 2px 6px; font-size: 0.7rem;" onclick="addProjectTag(${idx})">+ Tag</button>` : ''}
                </div>
                <div class="project-links">
                    ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" class="project-link">Live App ↗</a>` : ''}
                    ${!isViewMode ? `
                        <div style="display:flex; align-items:center; gap: 4px; font-size: 0.8rem; color:var(--text-light)">
                            <span>Link:</span>
                            <span contenteditable="true" data-path="projects.${idx}.liveUrl" style="border-bottom:1px dotted; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${proj.liveUrl || 'Add link'}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });

    // Event listeners for edits on project properties
    if (!isViewMode) {
        projectsGrid.querySelectorAll('[data-path]').forEach(el => {
            el.onblur = (e) => {
                const path = e.target.getAttribute('data-path');
                setValueByPath(state, path, e.target.innerText.trim());
                saveLocalDraft();
                
                // If it was a liveUrl update or category update, rerender
                if (path.includes('liveUrl')) {
                    renderProjects();
                }
            };
        });
    }
}

function createNewProject() {
    state.projects.unshift({
        id: "new-project-" + Date.now(),
        title: "New Project Title",
        category: "ai-ml",
        desc: "Click to write a brief overview of the project.",
        engineering: "Write details of the key engineering highlights here.",
        stack: ["Python", "TensorFlow"],
        liveUrl: ""
    });
    saveLocalDraft();
    renderProjects();
}

function deleteProject(idx) {
    if (confirm("Are you sure you want to delete this project?")) {
        state.projects.splice(idx, 1);
        saveLocalDraft();
        renderProjects();
    }
}

function addProjectTag(projIdx) {
    state.projects[projIdx].stack.push("New Tag");
    saveLocalDraft();
    renderProjects();
}

function deleteProjectTag(projIdx, tagIdx) {
    state.projects[projIdx].stack.splice(tagIdx, 1);
    saveLocalDraft();
    renderProjects();
}

// ----------------------------------------------------
// Education & Experience Timelines
// ----------------------------------------------------
function renderTimeline(type, container) {
    if (!container) return;
    
    // Clear list but keep headers if they exist
    const listEl = container.querySelector('.timeline-list');
    listEl.innerHTML = '';

    // Add list items
    state[type].forEach((item, idx) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item';
        itemDiv.innerHTML = `
            <div class="card-actions">
                <button class="icon-btn icon-btn-delete" title="Delete" onclick="deleteTimelineItem('${type}', ${idx})">🗑️</button>
            </div>
            <div class="timeline-date" ${!isViewMode ? `contenteditable="true" data-path="${type}.${idx}.date"` : ''}>${item.date}</div>
            <h4 class="timeline-title" ${!isViewMode ? `contenteditable="true" data-path="${type}.${idx}.title"` : ''}>${item.title}</h4>
            <div class="timeline-org" ${!isViewMode ? `contenteditable="true" data-path="${type}.${idx}.org"` : ''}>${item.org}</div>
            <p class="timeline-desc" ${!isViewMode ? `contenteditable="true" data-path="${type}.${idx}.desc"` : ''}>${item.desc}</p>
        `;
        listEl.appendChild(itemDiv);
    });

    if (!isViewMode) {
        // Add item button
        const addBtn = document.createElement('button');
        addBtn.className = 'btn btn-secondary';
        addBtn.style.marginTop = '15px';
        addBtn.innerText = `+ Add ${type === 'experience' ? 'Experience' : 'Education'}`;
        addBtn.onclick = () => addTimelineItem(type);
        listEl.appendChild(addBtn);

        // Bind events
        listEl.querySelectorAll('[data-path]').forEach(el => {
            el.onblur = (e) => {
                const path = e.target.getAttribute('data-path');
                setValueByPath(state, path, e.target.innerText.trim());
                saveLocalDraft();
            };
        });
    }
}

function addTimelineItem(type) {
    if (type === 'experience') {
        state.experience.push({
            date: "2026",
            title: "New Role",
            org: "Organization Name",
            desc: "Description of your key duties, achievements, and impact."
        });
    } else {
        state.education.push({
            date: "2026",
            title: "Degree / Course",
            org: "University / Institution",
            desc: "Grades, metrics, and details."
        });
    }
    saveLocalDraft();
    renderTimeline(type, type === 'experience' ? timelineExpCol : timelineEduCol);
}

function deleteTimelineItem(type, idx) {
    state[type].splice(idx, 1);
    saveLocalDraft();
    renderTimeline(type, type === 'experience' ? timelineExpCol : timelineEduCol);
}

// ----------------------------------------------------
// Certifications & Achievements Grid
// ----------------------------------------------------
function renderCertifications() {
    if (!certsGridContainer) return;
    certsGridContainer.innerHTML = '';

    state.certifications.forEach((cert, idx) => {
        const card = document.createElement('div');
        card.className = 'glass-panel cert-card fade-in';
        card.innerHTML = `
            <div class="card-actions">
                <button class="icon-btn icon-btn-delete" onclick="deleteCert(${idx})">🗑️</button>
            </div>
            <div class="cert-icon" ${!isViewMode ? `contenteditable="true" data-path="certifications.${idx}.icon"` : ''}>${cert.icon || '📜'}</div>
            <div class="cert-details">
                <div class="cert-title" ${!isViewMode ? `contenteditable="true" data-path="certifications.${idx}.title"` : ''}>${cert.title}</div>
                <div class="cert-org" ${!isViewMode ? `contenteditable="true" data-path="certifications.${idx}.org"` : ''}>${cert.org}</div>
            </div>
        `;
        certsGridContainer.appendChild(card);
    });

    if (!isViewMode) {
        const addCard = document.createElement('div');
        addCard.className = 'glass-panel cert-card fade-in';
        addCard.style.justifyContent = 'center';
        addCard.style.cursor = 'pointer';
        addCard.style.borderStyle = 'dashed';
        addCard.onclick = addCert;
        addCard.innerHTML = `<span style="font-size:1.5rem; color:var(--sweet-pink)">+ Add Certification</span>`;
        certsGridContainer.appendChild(addCard);

        // Bind events
        certsGridContainer.querySelectorAll('[data-path]').forEach(el => {
            el.onblur = (e) => {
                const path = e.target.getAttribute('data-path');
                setValueByPath(state, path, e.target.innerText.trim());
                saveLocalDraft();
            };
        });
    }
}

function addCert() {
    state.certifications.push({
        title: "New Certification",
        org: "Issuing Authority",
        icon: "📜"
    });
    saveLocalDraft();
    renderCertifications();
}

function deleteCert(idx) {
    state.certifications.splice(idx, 1);
    saveLocalDraft();
    renderCertifications();
}

function renderAchievements() {
    if (!achievementsGridContainer) return;
    achievementsGridContainer.innerHTML = '';

    state.achievements.forEach((ach, idx) => {
        const card = document.createElement('div');
        card.className = 'glass-panel cert-card fade-in';
        card.innerHTML = `
            <div class="card-actions">
                <button class="icon-btn icon-btn-delete" onclick="deleteAchievement(${idx})">🗑️</button>
            </div>
            <div class="cert-icon" ${!isViewMode ? `contenteditable="true" data-path="achievements.${idx}.icon"` : ''}>${ach.icon || '🏆'}</div>
            <div class="cert-details">
                <div class="cert-title" ${!isViewMode ? `contenteditable="true" data-path="achievements.${idx}.title"` : ''}>${ach.title}</div>
                <div class="cert-org" ${!isViewMode ? `contenteditable="true" data-path="achievements.${idx}.desc"` : ''}>${ach.desc}</div>
            </div>
        `;
        achievementsGridContainer.appendChild(card);
    });

    if (!isViewMode) {
        const addCard = document.createElement('div');
        addCard.className = 'glass-panel cert-card fade-in';
        addCard.style.justifyContent = 'center';
        addCard.style.cursor = 'pointer';
        addCard.style.borderStyle = 'dashed';
        addCard.onclick = addAchievement;
        addCard.innerHTML = `<span style="font-size:1.5rem; color:var(--sweet-pink)">+ Add Achievement</span>`;
        achievementsGridContainer.appendChild(addCard);

        // Bind events
        achievementsGridContainer.querySelectorAll('[data-path]').forEach(el => {
            el.onblur = (e) => {
                const path = e.target.getAttribute('data-path');
                setValueByPath(state, path, e.target.innerText.trim());
                saveLocalDraft();
            };
        });
    }
}

function addAchievement() {
    state.achievements.push({
        title: "New Achievement",
        desc: "Description of success metrics.",
        icon: "🏆"
    });
    saveLocalDraft();
    renderAchievements();
}

function deleteAchievement(idx) {
    state.achievements.splice(idx, 1);
    saveLocalDraft();
    renderAchievements();
}

// ----------------------------------------------------
// Lists (Languages / Interests)
// ----------------------------------------------------
function renderEditableList(type, container) {
    if (!container) return;
    container.innerHTML = '';

    state[type].forEach((item, idx) => {
        const span = document.createElement('span');
        span.className = 'skill-pill';
        span.innerHTML = `
            <span ${!isViewMode ? `contenteditable="true" data-path="${type}.${idx}"` : ''}>${item}</span>
            <span class="skill-pill-delete" onclick="deleteFromList('${type}', ${idx})">&times;</span>
        `;
        container.appendChild(span);
    });

    if (!isViewMode) {
        // Form to add
        const addWrapper = document.createElement('div');
        addWrapper.style.display = 'inline-flex';
        addWrapper.style.gap = '6px';
        addWrapper.innerHTML = `
            <input type="text" placeholder="Add..." class="add-skill-input" style="max-width: 100px;" id="add-list-input-${type}">
            <button class="btn btn-primary" style="padding: 4px 8px; font-size: 0.7rem;" onclick="addToList('${type}')">+</button>
        `;
        container.appendChild(addWrapper);

        // Bind events
        container.querySelectorAll('[data-path]').forEach(el => {
            el.onblur = (e) => {
                const path = e.target.getAttribute('data-path');
                setValueByPath(state, path, e.target.innerText.trim());
                saveLocalDraft();
            };
        });
    }
}

function addToList(type) {
    const input = document.getElementById(`add-list-input-${type}`);
    const val = input.value.trim();
    if (val) {
        state[type].push(val);
        input.value = '';
        saveLocalDraft();
        renderEditableList(type, type === 'languages' ? languagesContainer : interestsContainer);
    }
}

function deleteFromList(type, idx) {
    state[type].splice(idx, 1);
    saveLocalDraft();
    renderEditableList(type, type === 'languages' ? languagesContainer : interestsContainer);
}

// ----------------------------------------------------
// Figma Interactive Preview Iframe
// ----------------------------------------------------
function renderFigmaPreview() {
    if (!figmaIframeContainer) return;
    figmaIframeContainer.innerHTML = '';
    
    // We try to clean and format the figma link to make it an embeddable proto link
    let urlStr = state.profile.figmaLink || DEFAULT_DATA.profile.figmaLink;
    let embedUrl = urlStr;
    
    if (urlStr.includes('figma.com/proto/')) {
        // Change '/proto/' to '/embed?embed_host=share&url='
        embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(urlStr)}`;
    } else if (urlStr.includes('figma.com/file/')) {
        embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(urlStr)}`;
    }

    figmaIframeContainer.innerHTML = `
        <div class="figma-mockup-frame">
            <iframe 
                src="${embedUrl}" 
                allowfullscreen 
                style="border: none; width: 100%; height: 100%;"
                loading="lazy">
            </iframe>
            <div class="figma-overlay">
                <h3>View Design Portfolio</h3>
                <p style="margin: 10px 0 20px;">Open Sonali's high-fidelity interactive wireframes & case studies directly in Figma.</p>
                <a href="${urlStr}" target="_blank" class="btn btn-primary">Open Full Screen ↗</a>
            </div>
        </div>
    `;
}

// ----------------------------------------------------
// Navigation & Filtering
// ----------------------------------------------------
function setupNavInteractions() {
    // Dynamic Active Nav Indicator
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Hamburger Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-links');
    if (menuBtn && navMenu) {
        menuBtn.onclick = () => {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        };
        navMenu.querySelectorAll('a').forEach(l => {
            l.onclick = () => {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            };
        });
    }

    // Projects Grid Filter Toggles
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.onclick = () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-filter');
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        };
    });
}

// ----------------------------------------------------
// Toolbar / Control Actions (Editor UI)
// ----------------------------------------------------
async function generateShareLink() {
    const btn = document.querySelector('[onclick="generateShareLink()"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Compiling...';
    
    const compressed = await compressData(state);
    const shareUrl = `${window.location.origin}${window.location.pathname}#data=${compressed}`;
    
    btn.innerHTML = originalText;
    
    // Open share modal
    const modal = document.getElementById('share-modal');
    const urlInput = document.getElementById('share-url-input');
    urlInput.value = shareUrl;
    modal.classList.add('active');
}

function copyShareUrl() {
    const urlInput = document.getElementById('share-url-input');
    urlInput.select();
    document.execCommand('copy');
    
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.innerText = 'Copied! ✓';
    setTimeout(() => {
        copyBtn.innerText = 'Copy';
    }, 2000);
}

function togglePreview() {
    isViewMode = !isViewMode;
    updateModeClass();
    renderPortfolio();
    
    const prevBtn = document.getElementById('preview-btn');
    if (isViewMode) {
        prevBtn.innerHTML = '⚙️ Edit Mode';
        prevBtn.classList.remove('btn-secondary');
        prevBtn.classList.add('btn-primary');
    } else {
        prevBtn.innerHTML = '👁️ Preview';
        prevBtn.classList.remove('btn-primary');
        prevBtn.classList.add('btn-secondary');
    }
}

function resetTemplate() {
    if (confirm("This will overwrite all your custom changes with the default template. Proceed?")) {
        localStorage.removeItem('sonali_portfolio_draft');
        state = JSON.parse(JSON.stringify(DEFAULT_DATA));
        isViewMode = false;
        
        const prevBtn = document.getElementById('preview-btn');
        prevBtn.innerHTML = '👁️ Preview';
        prevBtn.className = 'btn btn-secondary';
        
        updateModeClass();
        renderPortfolio();
    }
}

function closeModal() {
    document.getElementById('share-modal').classList.remove('active');
}

// Connect Drawer controls
function toggleConnectDrawer() {
    const drawer = document.getElementById('connect-drawer');
    drawer.classList.toggle('active');
}

function submitContactForm(e) {
    e.preventDefault();
    alert("Message details captured! In your production build, this form can be integrated with services like Formspree, Web3Forms, or custom mailto templates.");
    toggleConnectDrawer();
}

// Global hookups
window.generateShareLink = generateShareLink;
window.copyShareUrl = copyShareUrl;
window.togglePreview = togglePreview;
window.resetTemplate = resetTemplate;
window.closeModal = closeModal;
window.deleteSkill = deleteSkill;
window.addSkill = addSkill;
window.createNewProject = createNewProject;
window.deleteProject = deleteProject;
window.addProjectTag = addProjectTag;
window.deleteProjectTag = deleteProjectTag;
window.addTimelineItem = addTimelineItem;
window.deleteTimelineItem = deleteTimelineItem;
window.addCert = addCert;
window.deleteCert = deleteCert;
window.addAchievement = addAchievement;
window.deleteAchievement = deleteAchievement;
window.addToList = addToList;
window.deleteFromList = deleteFromList;
window.toggleConnectDrawer = toggleConnectDrawer;
window.submitContactForm = submitContactForm;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupNavInteractions();
});
