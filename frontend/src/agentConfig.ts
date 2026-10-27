export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-deployment-readiness-agent",
  "title": "Deployment Readiness",
  "tagline": "Know if you're ready to ship.",
  "purpose": "Scores a deployment configuration against readiness checks: version pinning, health checks, rollback, resource limits, secret injection, and monitoring.",
  "accent": "#34d399",
  "features": [
    "Readiness check scoring",
    "Pass/fail per check",
    "Pre-deploy recommendations"
  ],
  "limitations": [
    "A high score does not guarantee a problem-free deploy.",
    "Checks are based on config text, not live systems."
  ],
  "fields": [
    {
      "name": "config",
      "label": "Deployment config (YAML or text)",
      "type": "textarea",
      "rows": 9,
      "placeholder": ""
    },
    {
      "name": "environment",
      "label": "Target environment",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    },
    {
      "name": "has_rollback",
      "label": "Rollback plan documented",
      "type": "checkbox",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "config": "version: v1.2.3\nimage: myapp:v1.2.3\nreplicas: 3\nresources:\n  limits:\n    cpu: \"500m\"\n    memory: \"256Mi\"\nenv:\n  - name: DATABASE_URL\n    valueFrom:\n      secretKeyRef:\n        name: db-secret\n        key: url\nreadinessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\nmonitoring:\n  metrics:\n    path: /metrics\n    port: 9090",
    "environment": "production",
    "has_rollback": true
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-deployment-readiness-agent"
};
