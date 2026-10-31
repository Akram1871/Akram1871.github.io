export const coursesDetailData = {
  "cse-3203": {
    code: "CSE 3203",
    title: "Machine Learning",
    fullTitle: "CSE 3203: Machine Learning",
    department: "Department of Computer Science & Engineering",
    institution: "Shanto-Mariam University of Creative Technology",
    instructor: "Akram Hossain",
    instructorEmail: "akramhossain@smuct.ac.bd",
    instructorProfile: "/",
    term: "Summer 2025, Winter 2026, Summer 2026",
    creditHour: "3.00",
    contactHours: "3.0 Hours/Week",
    prerequisite: "CSE 2204: Linear Algebra and basic statistics",
    labCourse: "CSE 3204: Machine Learning Sessional",
    about: "This course introduces the fundamental theory and concepts of Machine Learning algorithms, with a special emphasis on Supervised, Unsupervised, and Ensemble Learning paradigms and their real-world applications. Students gain mathematical and algorithmic knowledge to analyze, design, and deploy robust machine learning models for complex computational problems.",
    courseContents: [
      {
        topic: "Fundamentals of Machine Learning",
        details: "Introduction to supervised, unsupervised, and reinforcement learning paradigms, data representation, feature scaling, model selection criteria, bias-variance tradeoff, cross-validation, and evaluation metrics (Accuracy, Precision, Recall, F1-Score, ROC-AUC, MSE/RMSE)."
      },
      {
        topic: "Supervised Learning Algorithms",
        details: "Linear and multiple regression models, ordinary least squares, logistic regression for classification; Decision tree algorithms (ID3, C4.5, CART), entropy and information gain, pruning; Support Vector Machines (SVM), hyperplanes, hard/soft margins, kernel trick; Bayesian learning, Bayes theorem, Naïve Bayes classifiers, Bayesian belief networks."
      },
      {
        topic: "Unsupervised Learning & Clustering",
        details: "Clustering fundamentals, distance metrics (Euclidean, Manhattan, Cosine); Partitioning algorithms (K-means, K-medoids), optimal K selection (Elbow method, Silhouette score); Hierarchical clustering (agglomerative and divisive, dendrograms); Density-based clustering (DBSCAN); Expectation-Maximization (EM) algorithm and Gaussian Mixture Models (GMM); Dimensionality reduction via Principal Component Analysis (PCA)."
      },
      {
        topic: "Neural Networks & Optimization",
        details: "Biological vs. artificial neuron, Single-layer Perceptron, Multi-Layer Perceptrons (MLP), feedforward propagation; Activation functions (Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax); Loss functions (MSE, Binary/Categorical Cross-Entropy); Backpropagation calculus with gradient descent; Regularization techniques (L1 Lasso, L2 Ridge, Dropout, Batch Normalization); Optimization algorithms: Batch GD, Stochastic Gradient Descent (SGD), Mini-batch GD, Momentum, RMSProp, and Adam."
      },
      {
        topic: "Ensemble Learning & Modern Paradigms",
        details: "Bagging (Bootstrap Aggregation), Random Forest classification and regression, feature importance; Boosting paradigms, AdaBoost, Gradient Boosting, XGBoost; Stacking and Voting classifiers."
      },
      {
        topic: "Deep Learning Foundations & Sequential Modeling",
        details: "Recurrent Neural Networks (RNN) and vanishing gradient problem; Long Short-Term Memory (LSTM) networks and Gated Recurrent Units (GRU) for sequential and temporal data; Transformer architectures, self-attention mechanisms, multi-head attention, positional encoding, Encoder-Decoder structures, and introductory modern LLMs (BERT, GPT)."
      }
    ],
    clos: [
      {
        no: "CLO 1",
        statement: "Have a comprehensive understanding of the fundamental concepts, mathematical formulations, and challenges of machine learning including data representation, model selection, and model complexity.",
        plo: "PLO 2",
        skillLevel: "F1 (Fundamental)",
        teachingStrategy: "Interactive lectures on ML foundations & theoretical frameworks; Discussion of real-world use case studies.",
        assessment: "Mid-term Exam, Quizzes & Assignments."
      },
      {
        no: "CLO 2",
        statement: "Analyze the mathematical strengths, weaknesses, assumptions, and computational complexities of popular supervised and unsupervised machine learning algorithms.",
        plo: "PLO 2",
        skillLevel: "F1 (Fundamental)",
        teachingStrategy: "Lecture presentations on algorithmic comparisons; Rigorous problem-solving and comparative suitability analysis across tasks.",
        assessment: "Final Semester Examination."
      },
      {
        no: "CLO 3",
        statement: "Analyze the underlying mathematical relationships within and across machine learning paradigms, including optimization theory, probability, and linear algebra formulations.",
        plo: "PLO 4",
        skillLevel: "F1, F2",
        teachingStrategy: "Analytical lecture derivations; Interactive tutorial sessions applying mathematical models to formulate and solve computational problems.",
        assessment: "Handwritten calculation assignments & mathematical modeling exercises."
      },
      {
        no: "CLO 4",
        statement: "Design, implement, evaluate, and fine-tune machine learning algorithms to address real-world application challenges in healthcare, finance, NLP, and computer vision.",
        plo: "PLO 5",
        skillLevel: "F2, F3, F4",
        teachingStrategy: "Interactive lectures on emerging trends and practical deployment; Student-led project brainstorming and structured implementation reviews.",
        assessment: "Practical machine learning project design, model performance analysis, and capstone presentation."
      }
    ],
    schedule: [
      { week: "Week 01", title: "Course Introduction & ML Paradigms", content: "Overview of Machine Learning, AI vs ML vs DL, Supervised vs Unsupervised vs RL, Machine learning workflow.", readings: "Reddi Ch. 1 / Bishop Ch. 1" },
      { week: "Week 02", title: "Linear Regression & Gradient Descent", content: "Univariate & Multivariate linear regression, cost function, Ordinary Least Squares, Batch Gradient Descent.", readings: "Reddi Ch. 2 / Géron Ch. 4" },
      { week: "Week 03", title: "Logistic Regression & Classification Metrics", content: "Odds ratio, Sigmoid function, Decision boundaries, Cost function (Cross-Entropy), Confusion matrix, Precision/Recall/F1/ROC.", readings: "Géron Ch. 4" },
      { week: "Week 04", title: "Decision Trees & Information Theory", content: "Entropy, Information Gain, ID3, C4.5, Gini Impurity, CART algorithm, Overfitting and pruning techniques.", readings: "Mitchell Ch. 3" },
      { week: "Week 05", title: "Bayesian Learning & Naïve Bayes", content: "Maximum A Posteriori (MAP), Maximum Likelihood Estimation (MLE), Naïve Bayes classifier (Gaussian, Multinomial), text classification.", readings: "Mitchell Ch. 6" },
      { week: "Week 06", title: "Support Vector Machines (SVM)", content: "Maximal margin classifier, soft margin SVM, slack variables, Kernel trick (Linear, Polynomial, RBF).", readings: "Bishop Ch. 7" },
      { week: "Week 07", title: "Review & Mid-term Examination", content: "Comprehensive review of supervised algorithms, mathematical problem solving, and Mid-term exam.", readings: "Exam coverage" },
      { week: "Week 08", title: "Unsupervised Learning & Clustering", content: "K-Means algorithm, inertia, K-Medoids, Elbow method, Silhouette analysis, Hierarchical agglomerative clustering.", readings: "Géron Ch. 9" },
      { week: "Week 09", title: "Dimensionality Reduction", content: "Curse of dimensionality, Principal Component Analysis (PCA), Eigenvectors, Singular Value Decomposition (SVD).", readings: "Bishop Ch. 12" },
      { week: "Week 10", title: "Neural Networks: Perceptron & MLP", content: "Biological neuron model, Perceptron learning rule, Multi-layer Perceptron (MLP), activation functions (ReLU, Sigmoid, Tanh).", readings: "Goodfellow Ch. 6 / Reddi Ch. 4" },
      { week: "Week 11", title: "Backpropagation & Optimizers", content: "Derivation of backpropagation via chain rule, Regularization (L1, L2, Dropout), Optimizers (SGD with Momentum, RMSProp, Adam).", readings: "Goodfellow Ch. 8 / Reddi Ch. 5" },
      { week: "Week 12", title: "Ensemble Methods (Bagging & Boosting)", content: "Bootstrap aggregating, Random Forests, Out-of-Bag evaluation, Boosting concept, AdaBoost, XGBoost.", readings: "Géron Ch. 7" },
      { week: "Week 13", title: "Sequential Models (RNN, LSTM, GRU)", content: "Modeling sequences, Recurrent Neural Networks, Vanishing/Exploding gradients, LSTM memory cells, GRU architecture.", readings: "Goodfellow Ch. 10" },
      { week: "Week 14", title: "Transformers & Modern LLM Overview", content: "Attention is All You Need: Self-attention mechanism, Multi-head attention, Positional encoding, BERT and GPT models.", readings: "Vaswani et al. (2017) / Reddi Systems" }
    ],
    textbooks: [
      "Prof. Vijay Janapa Reddi, 'Machine Learning Systems: Principles and Practices of Engineering Artificially Intelligent Systems' (Main Source).",
      "Tom M. Mitchell, 'Machine Learning', McGraw-Hill Education.",
      "Aurélien Géron, 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', O'Reilly Media, 3rd Edition.",
      "Christopher M. Bishop, 'Pattern Recognition and Machine Learning', Springer.",
      "Ian Goodfellow, Yoshua Bengio, Aaron Courville, 'Deep Learning', MIT Press."
    ]
  },

  "cse-3204": {
    code: "CSE 3204",
    title: "Machine Learning Sessional",
    fullTitle: "CSE 3204: Machine Learning Sessional",
    department: "Department of Computer Science & Engineering",
    institution: "Shanto-Mariam University of Creative Technology",
    instructor: "Akram Hossain",
    instructorEmail: "akramhossain@smuct.ac.bd",
    instructorProfile: "/",
    term: "Summer 2025, Winter 2026, Summer 2026",
    creditHour: "1.50",
    contactHours: "3.0 Hours/Week",
    prerequisite: "CSE 2204: Linear Algebra and basic statistics; Co-requisite: CSE 3203",
    labCourse: "Co-requisite to CSE 3203 Machine Learning (Theory)",
    about: "CSE 3204 is a rigorous, practical, field-work-based laboratory course where students design and implement end-to-end Machine Learning systems. The course emphasizes authentic primary data collection, data preprocessing, exploratory analysis, model development with Scikit-Learn and PyTorch, and mandatory integration with physical hardware devices (sensors, IoT, microcontrollers) or deployable software applications (web apps, APIs, dashboards).",
    courseContents: [
      {
        topic: "Python Scientific Stack & Environment Setup",
        details: "Setting up Anaconda/Miniconda, Jupyter Notebook, Google Colab, NumPy vectorization, Pandas DataFrame manipulation, Matplotlib & Seaborn data visualization pipelines."
      },
      {
        topic: "Field Work Planning & Authentic Dataset Collection",
        details: "Formulating real-world predictive questions, designing targeted surveys/questionnaires, identifying target respondents, gathering valid field data (medical, clinical, agricultural, sensor-based, or user surveys), maintaining authentic and ethical data standards."
      },
      {
        topic: "Dataset Preparation, Data Cleaning & Preprocessing",
        details: "Handling missing values (imputation strategies), detecting and treating outliers, duplicate removal, categorical variable encoding (One-Hot, Ordinal, Target), feature scaling (StandardScaler, MinMaxScaler), handling class imbalance (SMOTE, class weighting)."
      },
      {
        topic: "Exploratory Data Analysis (EDA) & Feature Engineering",
        details: "Univariate, bivariate, and multivariate distribution analysis, correlation heatmaps, feature extraction, domain-specific feature engineering, dimensionality reduction via PCA."
      },
      {
        topic: "Supervised Model Training & Hyperparameter Tuning",
        details: "Stratified train-test splitting, k-fold cross-validation, baseline regression and classification models, Hyperparameter tuning using GridSearchCV and RandomizedSearchCV, comparative model evaluation across metrics (Accuracy, Precision, Recall, F1, ROC-AUC, MAE, RMSE)."
      },
      {
        topic: "Mandatory Hardware/Software System Integration",
        details: "Connecting trained models to practical interactive systems: Hardware integration (sensor arrays, Arduino, ESP32, Raspberry Pi, camera/biometric modules) or Software integration (FastAPI, Flask, Streamlit, Gradio, web/mobile dashboards, REST APIs)."
      },
      {
        topic: "Model Export, Deployment & Defense",
        details: "Model serialization (pickle, joblib, ONNX), end-to-end pipeline export, writing comprehensive technical reports, creating interactive live demos, and defending methodology in oral technical viva."
      }
    ],
    clos: [
      {
        no: "CLO 1",
        statement: "Formulate real-world predictive problems, design structured field surveys, and collect authentic, ethically sound primary datasets.",
        plo: "PLO 2, PLO 6",
        skillLevel: "P2 (Perception & Practice)",
        teachingStrategy: "Interactive lab demonstrations of questionnaire design and data collection protocols.",
        assessment: "Field work plan, questionnaire submission, and raw dataset verification."
      },
      {
        no: "CLO 2",
        statement: "Clean, preprocess, analyze, and engineer features from raw real-world data using Python scientific libraries.",
        plo: "PLO 3, PLO 5",
        skillLevel: "P3 (Precision Execution)",
        teachingStrategy: "Hands-on guided programming labs with real-world messy datasets.",
        assessment: "Cleaned dataset submissions, EDA visualization notebooks, and code reviews."
      },
      {
        no: "CLO 3",
        statement: "Implement, evaluate, and tune multiple machine learning algorithms, selecting and justifying the optimal model based on rigorous quantitative metrics.",
        plo: "PLO 4, PLO 5",
        skillLevel: "P4 (Analytical Synthesis)",
        teachingStrategy: "Step-by-step algorithm benchmarking lab exercises and parameter tuning clinics.",
        assessment: "Model comparison notebooks, evaluation metrics report, and train-test splits."
      },
      {
        no: "CLO 4",
        statement: "Integrate trained machine learning models into functional hardware devices or software applications, presenting and defending the complete system through live demos and technical reports.",
        plo: "PLO 8, PLO 10",
        skillLevel: "P5 (Full Integration & Defense)",
        teachingStrategy: "Studio mentorship on hardware/software integration and presentation rehearsals.",
        assessment: "Live system demo, hardware/software integration functionality, final report, and technical viva."
      }
    ],
    schedule: [
      { week: "Week 01", title: "Lab Orientation & Field Work Planning", content: "Introduction to ML Sessional, problem selection, questionnaire design, identifying target variables, field work rubric.", readings: "Lab Rubrics Document" },
      { week: "Week 02", title: "Field Data Collection & Ethical Sourcing", content: "Conducting field surveys, gathering minimum valid records, submitting raw datasets with fieldwork proof and evidence.", readings: "Data Collection Protocols" },
      { week: "Week 03", title: "Dataset Preparation & Data Cleaning Lab", content: "Handling missing records, categorical encoding, duplicate detection, formatting raw and cleaned CSVs.", readings: "Hands-on ML Ch. 2" },
      { week: "Week 04", title: "Exploratory Data Analysis (EDA) Lab", content: "Distribution plots, correlation heatmaps, feature selection, preparing final ML-ready arrays.", readings: "Python Data Science Handbook" },
      { week: "Week 05", title: "Supervised Model Training & Evaluation", content: "Train-test splits, implementing at least two algorithms (Logistic, Random Forest, SVM, XGBoost), metric comparisons.", readings: "Scikit-Learn Guide" },
      { week: "Week 06", title: "Hardware / Software Integration Workshop", content: "Connecting models to Streamlit/FastAPI or ESP32/Raspberry Pi sensors, serial communication, API endpoints.", readings: "Reddi Systems Ch. 6 & 7" },
      { week: "Week 07", title: "Mid-Term Lab Progress Evaluation", content: "Review of data cleaning, EDA, baseline models, and integration plan; oral viva check.", readings: "Progress Deliverables" },
      { week: "Week 08", title: "Neural Networks & Deep Learning in Lab", content: "Building Multi-Layer Perceptrons in PyTorch/Keras, training loops, loss curve inspection, early stopping.", readings: "PyTorch Official Tutorials" },
      { week: "Week 09", title: "Model Optimization & Hyperparameter Search", content: "Cross-validation, GridSearchCV, learning rate tuning, confusion matrix interpretation, threshold tuning.", readings: "Scikit-Learn Tuning Docs" },
      { week: "Week 10", title: "Edge Deployment & Model Packaging", content: "Model serialization (joblib/ONNX), lightweight model quantization, testing local inference speed.", readings: "Reddi Edge AI Ch. 8" },
      { week: "Week 11", title: "Full System Dry-Run & Testing", content: "End-to-end integration testing: input capture → inference → live UI/hardware action, edge-case debugging.", readings: "Integration Checklist" },
      { week: "Week 12", title: "Final Report Preparation & Documentation", content: "Structuring 10-point final submission package: architecture diagrams, README, code formatting.", readings: "Submission Guidelines" },
      { week: "Week 13", title: "Final Project Presentations & Live Demo Day", content: "Live demonstration of integrated system, evaluation against 20-mark final rubric before faculty panel.", readings: "Final Rubrics" },
      { week: "Week 14", title: "Comprehensive Technical Viva & Lab Exam", content: "Individual code defense, theoretical justification, restricted-environment hands-on lab assessment.", readings: "Lab Exam Coverage" }
    ],
    textbooks: [
      "Machine Learning Lab Project Complete Rubrics: Field Work-Based Dataset Collection and ML Implementation (SMUCT Department of CSE).",
      "Prof. Vijay Janapa Reddi, 'Machine Learning Systems: Principles and Practices of Engineering Artificially Intelligent Systems'.",
      "Aurélien Géron, 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', O'Reilly Media.",
      "Wes McKinney, 'Python for Data Analysis: Data Wrangling with Pandas, NumPy, and Jupyter', O'Reilly Media."
    ]
  },

  "cse-4105": {
    code: "CSE 4145",
    title: "Digital Image Processing",
    fullTitle: "CSE 4145: Digital Image Processing",
    department: "Department of Computer Science & Engineering",
    institution: "Shanto-Mariam University of Creative Technology",
    instructor: "Akram Hossain",
    instructorEmail: "akramhossain@smuct.ac.bd",
    instructorProfile: "/",
    term: "Summer 2025, Winter 2025",
    creditHour: "3.00",
    contactHours: "3.0 Hours/Week",
    prerequisite: "Calculus, Vector and Matrices",
    labCourse: "None",
    about: "Digital Image Processing (DIP) is a capstone-level advanced course designed to consolidate and extend students' knowledge in mathematics, signal processing, and computer algorithms. Offered in the senior undergraduate curriculum, it equips students with theoretical principles and practical techniques of digital image representation, enhancement, restoration, morphological processing, segmentation, compression, and feature extraction for healthcare, remote sensing, and computer vision applications.",
    courseContents: [
      {
        topic: "Introduction to Digital Image Processing",
        details: "Fundamentals of digital image representation, image acquisition systems, sensor arrays, sampling and quantization, spatial resolution and dynamic range, pixel adjacency, connectivity, distance metrics, and basic point/intensity transformations."
      },
      {
        topic: "Image Enhancement in Spatial Domain",
        details: "Point processing operations, contrast stretching, thresholding, bit-plane slicing; Histogram processing, histogram equalization, local histogram processing; Spatial filtering fundamentals, smoothing linear spatial filters, Gaussian filter; Order-statistic (non-linear) filters (Median, Min/Max); Sharpening spatial filters (Laplacian, Gradient, High-boost filtering)."
      },
      {
        topic: "Image Enhancement in Frequency Domain",
        details: "One-dimensional and two-dimensional Discrete Fourier Transform (DFT), Fast Fourier Transform (FFT); Frequency domain properties (translation, periodicity, symmetry); Filtering in frequency domain: Ideal, Butterworth, and Gaussian low-pass filters (smoothing); Ideal, Butterworth, and Gaussian high-pass filters (sharpening); Laplacian in frequency domain."
      },
      {
        topic: "Image Restoration & Degradation Models",
        details: "Model of image degradation/restoration process, noise models (Gaussian, Rayleigh, Erlang, Exponential, Salt-and-Pepper); Restoration in the presence of noise only (spatial filtering); Periodic noise reduction by frequency domain filtering; Estimation of degradation function; Inverse filtering, Wiener filtering (Minimum Mean Square Error), Constrained least-squares filtering."
      },
      {
        topic: "Morphological Image Processing",
        details: "Set theory applied to binary images; Basic morphological operations: Erosion, Dilation, Opening, Closing; Hit-or-Miss transformation; Morphological algorithms: boundary extraction, hole filling, extraction of connected components, thinning, thickening, skeletons, and convex hull."
      },
      {
        topic: "Image Segmentation & Edge Detection",
        details: "Detection of discontinuities: point, line, and edge detection; Gradient operators: Roberts, Prewitt, Sobel, Laplacian of Gaussian (LoG); Canny edge detection algorithm; Edge linking and boundary detection via Hough transform; Thresholding methods: global thresholding, Otsu's optimal thresholding; Region-based segmentation: region growing, region splitting and merging; Watershed segmentation algorithm."
      },
      {
        topic: "Feature Extraction, Color Models & Compression",
        details: "Color image processing: color models (RGB, CMY, HSI, YCbCr), pseudo-color processing, full-color transformations; Image compression models, coding redundancy, Huffman coding, Arithmetic coding, Run-length coding, LZW, JPEG standard (DCT-based); Representation & description: chain codes, boundary descriptors, Fourier descriptors, moment invariants, and introductory machine learning in image analysis."
      }
    ],
    clos: [
      {
        no: "CLO 1",
        statement: "Explain the fundamental concepts, mathematical models, and physical acquisition of digital images, including sampling, quantization, pixel neighborhoods, and intensity transformation operations.",
        plo: "PLO 2",
        skillLevel: "F1 (Fundamental)",
        teachingStrategy: "Interactive lectures on key image concepts and mathematical transforms; In-depth classroom discussions clarifying discrete pixel operations.",
        assessment: "Mid-term Examination & Quiz Tests."
      },
      {
        no: "CLO 2",
        statement: "Apply and evaluate image enhancement and restoration techniques in both spatial and frequency domains to enhance visual quality, remove noise, and recover degraded imagery.",
        plo: "PLO 2",
        skillLevel: "F2, F3",
        teachingStrategy: "Mathematical lectures on filtering theories; Hands-on tutorial sessions solving practical filtering and degradation restoration problems using sample datasets.",
        assessment: "Semester Final Examination."
      },
      {
        no: "CLO 3",
        statement: "Analyze advanced image segmentation and feature extraction techniques to partition images and extract quantitative geometric, texture, and boundary representations.",
        plo: "PLO 4",
        skillLevel: "F1, F2",
        teachingStrategy: "Lectures on segmentation and gradient operators; Interactive Q&A sessions exploring region partitioning and edge-linking algorithms.",
        assessment: "Class Tests & Analytical Implementation Case Studies."
      },
      {
        no: "CLO 4",
        statement: "Design, construct, and assess image compression pipelines and pattern recognition solutions utilizing standard algorithmic transforms and contemporary computational tools.",
        plo: "PLO 5",
        skillLevel: "F2, F3, F4",
        teachingStrategy: "Comprehensive lectures introducing compression coding standards (Huffman, JPEG) and object recognition; Student presentations on real-world medical and computer vision applications.",
        assessment: "Algorithm design assignments, practical project demos, and research-oriented presentations."
      }
    ],
    schedule: [
      { week: "Week 01", title: "Digital Image Fundamentals", content: "Light, electromagnetic spectrum, visual perception, image sensing and acquisition, sampling, quantization, pixel matrix.", readings: "Gonzalez & Woods Ch. 1 & 2" },
      { week: "Week 02", title: "Pixel Relationships & Basic Intensity Transformations", content: "Neighbors of a pixel, adjacency, connectivity, regions, boundaries, distance measures, image negatives, log transforms, power-law (gamma) transforms.", readings: "Gonzalez & Woods Ch. 2 & 3" },
      { week: "Week 03", title: "Histogram Processing & Equalization", content: "Image histograms, contrast stretching, histogram equalization derivation, histogram matching (specification), local enhancement.", readings: "Gonzalez & Woods Ch. 3" },
      { week: "Week 04", title: "Spatial Filtering (Smoothing & Sharpening)", content: "Mechanics of spatial convolution/correlation, linear smoothing filters (box, Gaussian), order-statistic non-linear filters (median), sharpening with Laplacian and Sobel.", readings: "Gonzalez & Woods Ch. 3" },
      { week: "Week 05", title: "Fourier Transform & Frequency Domain", content: "1D & 2D Discrete Fourier Transform, properties of 2D DFT, frequency spectrum, phase angle, Fast Fourier Transform (FFT) principles.", readings: "Gonzalez & Woods Ch. 4" },
      { week: "Week 06", title: "Frequency Domain Filtering", content: "Filtering workflow in frequency domain, Ideal, Butterworth, and Gaussian lowpass filters (blurring), Highpass filters for edge enhancement.", readings: "Gonzalez & Woods Ch. 4" },
      { week: "Week 07", title: "Review & Mid-term Examination", content: "Comprehensive spatial and frequency domain enhancement review, question-answer session, and Mid-term exam.", readings: "Exam coverage" },
      { week: "Week 08", title: "Image Degradation & Restoration", content: "Degradation model, noise probability density functions (Gaussian, Rayleigh, Salt-and-Pepper), periodic noise reduction, inverse filtering, Wiener filtering.", readings: "Gonzalez & Woods Ch. 5" },
      { week: "Week 09", title: "Morphological Image Processing", content: "Set theory fundamentals, erosion, dilation, duality, opening and closing, hit-or-miss transform, boundary extraction, hole filling.", readings: "Gonzalez & Woods Ch. 9" },
      { week: "Week 10", title: "Image Segmentation: Discontinuity & Edge Detection", content: "Detection of points, lines, edges, gradient operators (Prewitt, Sobel), Laplacian of Gaussian (Marr-Hildreth), Canny edge detector algorithm.", readings: "Gonzalez & Woods Ch. 10" },
      { week: "Week 11", title: "Advanced Segmentation (Thresholding & Regions)", content: "Global thresholding, Otsu's method for optimal threshold selection, region growing, region splitting and merging, watershed transform.", readings: "Gonzalez & Woods Ch. 10" },
      { week: "Week 12", title: "Color Image Processing", content: "Color fundamentals, chromaticity diagram, RGB, CMY/CMYK, HSI, and YCbCr color spaces, pseudocolor image processing, full-color image smoothing and sharpening.", readings: "Gonzalez & Woods Ch. 6" },
      { week: "Week 13", title: "Image Compression Fundamentals", content: "Redundancy types (coding, spatial, psychovisual), fidelity criteria, Huffman coding, Run-length encoding, LZW, Discrete Cosine Transform (DCT), JPEG compression pipeline.", readings: "Gonzalez & Woods Ch. 8" },
      { week: "Week 14", title: "Feature Representation & Computer Vision Applications", content: "Chain codes, polygonal approximations, boundary segments, shape descriptors, moments, introduction to CNNs and deep vision pipelines.", readings: "Gonzalez & Woods Ch. 11 & 12" }
    ],
    textbooks: [
      "Rafael C. Gonzalez, Richard E. Woods, 'Digital Image Processing', Pearson, 4th Edition.",
      "Rafael C. Gonzalez, Richard E. Woods, Steven L. Eddins, 'Digital Image Processing Using MATLAB', Gatesmark Publishing, 2nd Edition.",
      "Wilhelm Burger, Mark J. Burge, 'Digital Image Processing: An Algorithmic Introduction', Springer."
    ]
  },

  "cse-2100": {
    code: "CSE 2100",
    title: "Software Development Project",
    fullTitle: "CSE 2100: Software Development Project",
    department: "Department of Computer Science & Engineering",
    institution: "Shanto-Mariam University of Creative Technology",
    instructor: "Akram Hossain",
    instructorEmail: "akramhossain@smuct.ac.bd",
    instructorProfile: "/",
    term: "Summer 2025",
    creditHour: "0.75",
    contactHours: "1.5 Hours/Week",
    prerequisite: "None (Object-Oriented Programming & Basic Data Structures recommended)",
    labCourse: "Studio Project Lab & Capstone Mentorship",
    about: "This project-based studio course is engineered to help undergraduate students bridge software engineering theory and commercial development practice. Students work in agile teams to navigate the full software development life cycle (SDLC): requirement elicitation, architecture design, design patterns, mobile app development with Flutter, version-controlled collaboration, testing, and continuous deployment. It fosters essential competencies in problem analysis, clean architecture, modular coding, and live capstone presentations.",
    courseContents: [
      {
        topic: "Software Development Platforms & Tooling",
        details: "Overview of professional software engineering environments, modern code editors (VS Code), Git version control workflows (branching, commits, pull requests, merge conflicts), terminal commands, and modern SDLC workflows (planning → designing → coding → testing → deploying)."
      },
      {
        topic: "Project Identification, Scoping & Requirement Engineering",
        details: "Collaborative brainstorming and vetting project ideas, defining product vision, scope definition, stakeholder analysis, requirement elicitation (functional vs. non-functional requirements), writing user stories, and creating milestone-driven project roadmaps."
      },
      {
        topic: "Software Design Patterns & Architecture",
        details: "Foundational software design patterns (Creational, Structural, Behavioral including Singleton, Factory, Observer, Repository pattern), SOLID principles, Separation of Concerns, Clean Architecture layers, and modular system design."
      },
      {
        topic: "Mobile App Development with Flutter & Dart",
        details: "Dart language essentials, Flutter widget tree, Stateless vs. Stateful widgets, responsive UI layouts, navigation & routing, state management paradigms (Provider / Riverpod / Bloc), and mobile app lifecycle management."
      },
      {
        topic: "Application Architecture, State Management & Database Integration",
        details: "Client-server architecture, RESTful API design and consumption, asynchronous data handling, state management patterns, relational and NoSQL database modeling (Supabase, Firebase, PostgreSQL, MongoDB), user authentication, and secure token management."
      },
      {
        topic: "Software Testing, Code Quality & DevOps Deployment",
        details: "Unit testing basics, integration testing, code refactoring and clean code principles, static code analysis, continuous deployment on cloud platforms (GitHub Pages, Vercel, Firebase Hosting), and writing professional documentation (README, API schemas, user manuals)."
      },
      {
        topic: "Agile Project Delivery, Capstone Presentations & Peer Review",
        details: "Sprint planning, daily standups, backlog management, sprint retrospectives, live technical demonstrations, pitch presentations, and structured peer code reviews."
      }
    ],
    clos: [
      {
        no: "CLO 1",
        statement: "Explain and elicit software requirements using standard software engineering principles, elicitation techniques, and functional/non-functional classification.",
        plo: "PLO 1",
        skillLevel: "F1 (Fundamental)",
        teachingStrategy: "Interactive lectures on requirement engineering, software case studies, and user-story workshops.",
        assessment: "Written quizzes, requirement specification documents, and class Q&A sessions."
      },
      {
        no: "CLO 2",
        statement: "Analyze different commercial problem domains, evaluate existing digital products, and select viable, innovative software project ideas.",
        plo: "PLO 2",
        skillLevel: "S1 (Social & Team)",
        teachingStrategy: "Case study analysis of successful and failed software startups; Facilitated group discussions and problem domain analysis.",
        assessment: "Project idea proposal submission, competitive analysis report, and elevator pitch."
      },
      {
        no: "CLO 3",
        statement: "Apply software design patterns, system architecture, database schemas, and develop a fully functional mobile/web application using Flutter and appropriate frameworks.",
        plo: "PLO 3",
        skillLevel: "F3 (Thinking & Creation)",
        teachingStrategy: "Hands-on lab demonstrations of Flutter & design patterns; Guided studio development of modular clean architectures.",
        assessment: "Prototype submission, Git repository code quality, lab-based milestone reviews, and oral technical viva."
      },
      {
        no: "CLO 4",
        statement: "Present, demonstrate, and defend the completed software application through live product demos, presentation slides, and technical documentation.",
        plo: "PLO 8, PLO 10",
        skillLevel: "S2 (Communication & Leadership)",
        teachingStrategy: "Guided presentation rehearsals, live demo clinics, and structured feedback sessions.",
        assessment: "Final live capstone evaluation, demonstration slides, project technical report, and peer reviews."
      }
    ],
    schedule: [
      { week: "Week 01", title: "Development Environments & Git Version Control", content: "Setting up VS Code, Git CLI, repository creation, branching strategies, commit conventions, GitHub collaboration.", readings: "Pro Git by Scott Chacon" },
      { week: "Week 02", title: "SDLC Workflows & Project Inception", content: "Software Development Life Cycle (SDLC) models, Agile Scrum, brainstorming problem statements, team formation, Kanban boards.", readings: "Agile Alliance Principles" },
      { week: "Week 03", title: "Requirement Engineering & User Stories", content: "Functional and non-functional requirements, writing user stories with acceptance criteria, MoSCoW prioritization.", readings: "Software Engineering (Pressman) Ch. 5" },
      { week: "Week 04", title: "Software Design Patterns & Clean Architecture", content: "Creational and Structural patterns (Singleton, Factory, Repository), SOLID design principles, modular code organization.", readings: "Design Patterns (GoF) / Clean Architecture" },
      { week: "Week 05", title: "Flutter Fundamentals & Dart Essentials", content: "Dart language overview, Flutter SDK setup, widget hierarchy, Stateless & Stateful widgets, reactive UI building.", readings: "Flutter Official Documentation" },
      { week: "Week 06", title: "Flutter UI Layouts & Navigation", content: "Responsive mobile layouts (Column, Row, Stack, ListView), theme customization, declarative routing, and screen transitions.", readings: "Flutter UI Guidelines" },
      { week: "Week 07", title: "Mid-Term Milestone: Architecture & Prototype Review", content: "Evaluation of Flutter application prototype, architecture diagrams, requirement specification approval, and interactive viva.", readings: "Milestone Deliverables" },
      { week: "Week 08", title: "State Management in Flutter", content: "State management paradigms (Provider / Riverpod / Bloc), unidirectional data flow, managing app-wide reactive state.", readings: "Flutter State Management Docs" },
      { week: "Week 09", title: "Backend Services & Database Integration", content: "REST API concepts, HTTP methods, CRUD operations, database schema design, BaaS integration (Supabase/Firebase).", readings: "RESTful Web APIs" },
      { week: "Week 10", title: "Authentication & Security Fundamentals", content: "User registration, password hashing, JWT tokens, session persistence, role-based route guarding.", readings: "OWASP Top 10 Security" },
      { week: "Week 11", title: "Testing, Code Review & Refactoring", content: "Unit tests, widget testing, code smells, clean architecture enforcement, GitHub PR review sessions.", readings: "Clean Code (Robert C. Martin)" },
      { week: "Week 12", title: "Deployment, CI/CD & Documentation", content: "Production bundling, automated deployment to GitHub Pages / Vercel / App distribution, writing professional README.", readings: "DevOps Handbook" },
      { week: "Week 13", title: "Dry-Run & User Acceptance Testing (UAT)", content: "Peer testing, bug triage, performance optimization, demo script preparation, slide deck refinement.", readings: "Testing Checklists" },
      { week: "Week 14", title: "Final Capstone Demo Day & Presentation", content: "Live application demonstrations, question-answer defense before faculty panel, submission of final project reports.", readings: "Final Capstone Showcase" }
    ],
    textbooks: [
      "Roger S. Pressman, Bruce R. Maxim, 'Software Engineering: A Practitioner's Approach', McGraw-Hill.",
      "Robert C. Martin, 'Clean Code: A Handbook of Agile Software Craftsmanship', Prentice Hall.",
      "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides, 'Design Patterns: Elements of Reusable Object-Oriented Software', Addison-Wesley.",
      "Scott Chacon, Ben Straub, 'Pro Git', Apress (Open Access)."
    ]
  }
};
