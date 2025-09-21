class PortfolioData {
  constructor(data = {}) {
    this.sections = Array.isArray(data.sections) ? data.sections : [];
    this.personalInfo = data.personalInfo || {
      designation: '', website: '', phone: '', city: '', age: '', degree: '', email: ''
    };
    this.skills = Array.isArray(data.skills) ? data.skills : [];
    this.applications = Array.isArray(data.applications) ? data.applications : [];
    this.photographs = Array.isArray(data.photographs) ? data.photographs : [];
    this.resumeData = data.resumeData || {
      name: '', location: '', phone: '', email: '', summary: '', pdfCVUrl: '', education: [], experience: []
    };
  }
}

export default PortfolioData;
