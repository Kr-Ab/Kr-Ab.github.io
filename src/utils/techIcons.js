// Utility for mapping skill names to icon filenames
export const techIconMap = {
  Docker: 'docker.svg',
  Kubernetes: 'kubernetes.svg',
  AWS: 'aws.svg',
  Azure: 'azure.svg',
  GCP: 'gcp.svg',
  Jenkins: 'jenkins.svg',
  'GitHub Actions': 'github-actions.svg',
  Ansible: 'ansible.svg',
  Terraform: 'terraform.svg',
};

export function getTechIcon(skill) {
  for (const key in techIconMap) {
    if (skill.toLowerCase().includes(key.toLowerCase())) {
      return `/assets/icons/tech/${techIconMap[key]}`;
    }
  }
  return null;
}
