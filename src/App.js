import React from "react";

function App() {
  // Client Services
  const services = [
    { name: "Capital Group", status: "Healthy", lastDeployment: "v2.4.1", owner: "Tabasum" },
    { name: "Shridhar", status: "Degraded", lastDeployment: "v1.8.5", owner: "Ayush" },
    { name: "Analytics Dashboard", status: "Healthy", lastDeployment: "v3.2.0", owner: "Ansh" },
    { name: "Customer Portal", status: "Down", lastDeployment: "v1.0.9", owner: "Rishikesh" },
  ];

  // Team Members
  const teamMembers = [
    { name: "Shreya", role: "HR", skills: ["AWS", "Kubernetes", "Terraform", "Jenkins"] },
    { name: "Ayush", role: "Devops Engineer", skills: ["Azure", "Ansible", "Helm", "Docker"] },
    { name: "Anup", role: "Devops", skills: ["Prometheus", "Grafana", "Python", "Linux"] },
    { name: "Rishikesh", role: "Devops Engineer", skills: ["IAM", "KMS", "Vault", "Zero Trust"] },
    { name: "Praveen", role: "Devops Engineer", skills: ["IAM", "KMS", "Vault", "Zero Trust"] },
    { name: "Kapil", role: "Devops Engineer", skills: ["IAM", "KMS", "Vault", "Zero Trust"] },
    { name: "Shivam", role: "Devops Engineer", skills: ["IAM", "KMS", "Vault", "Zero Trust"] },
    { name: "Tabasum", role: "Security Engineer", skills: ["Linux", "AWS", "Azure", "Wiz", "Cloud Security", "OPA"] },
    { name: "Shubhek", role: "Devops Engineer", skills: ["IAM", "KMS", "Vault", "Zero Trust"] },
    { name: "Ansh", role: "Devops Engineer", skills: ["AWS", "Linux", "Docker", "Zero Trust"] }
    
];

  // Function to get status color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case "healthy": return "#00e676"; // green
      case "degraded": return "#ffc107"; // yellow
      case "down": return "#ff3d00"; // red
      default: return "#bbb";
    }
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", background: "#0d1117", color: "#f5f5f5", minHeight: "100vh" }}>
      
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#00e676", textShadow: "0 0 12px rgba(0,230,118,0.8)" }}>🚀 DevOps Service Dashboard</h1>
        <p style={{ color: "#bbb" }}>Monitoring Client Services & Deployments</p>
      </header>

      {/* Client Services Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1e90ff", marginBottom: "20px", textShadow: "0px 0px 10px rgba(30,144,255,0.8)" }}>🖥️ Client Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {services.map((service, index) => (
            <div key={index} style={cardStyle}>
              <h3>{service.name}</h3>
              <p><b>Status:</b> <span style={{ color: getStatusColor(service.status) }}>{service.status}</span></p>
              <p><b>Last Deployment:</b> {service.lastDeployment}</p>
              <p><b>Owner:</b> {service.owner}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section>
        <h2 style={{ color: "#1e90ff", marginBottom: "20px", textShadow: "0px 0px 10px rgba(30,144,255,0.8)" }}>👩‍💻 DevOps Team Members</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={{ color: "#00e676" }}>{member.name}</h3>
              <p><b>Role:</b> {member.role}</p>
              <p><b>Skills:</b></p>
              <ul>
                {member.skills.map((skill, i) => (
                  <li key={i} style={{ color: "#1e90ff" }}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// Card style
const cardStyle = {
  background: "#161b22",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 0 12px rgba(0, 230, 118, 0.3)",
  transition: "transform 0.3s ease, boxShadow 0.3s ease",
  cursor: "pointer"
};

export default App;
