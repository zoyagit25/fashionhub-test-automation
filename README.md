FashionHub Test Automation Suite
A comprehensive automated testing solution for the FashionHub website using Playwright and TypeScript. This project implements all 4 required test cases with support for multiple environments and browsers.

🎯 Test Cases Implemented
Console Errors Check - Verify no console errors on home page, detect intentional errors on about page

Link Status Validation - Check all internal links return valid status codes (200 or 30x)

Login Functionality - Test user login with provided credentials (demouser/fashion123)

GitHub PR Report - Generate CSV report of open pull requests from GitHub API

🚀 Quick Start
Prerequisites
Node.js 16+

Docker (for containerized execution)

Installation
bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps
Running Tests
bash
# Run all tests against production (recommended)
npm test

# Run against specific environment
npm run test:local      # Local environment
npm run test:staging    # Staging environment  
npm run test:production # Production environment

# Run with visible browser
npm run test:headed

# Run only Firefox tests
npm run test:firefox
Docker Execution
bash
# Local environment with simulated app
npm run docker:local

# Staging environment with simulated app  
npm run docker:staging

# Production environment (real website)
npm run docker:production
🌐 Environment Strategies
✅ Option 1: Direct to Production (Recommended)
The simplest, most stable approach that works immediately. All environments point to the live production website:

javascript
// In config files
{
  "local": "https://pocketaces2.github.io/fashionhub/",
  "staging": "https://pocketaces2.github.io/fashionhub/", 
  "production": "https://pocketaces2.github.io/fashionhub/"
}
Benefits:

✅ No dependencies on external Docker images

✅ Always accessible and stable

✅ Zero maintenance overhead

✅ Completes all 4 test cases successfully

✅ Perfect for CI/CD pipelines

Usage:

bash
npx playwright test --env=production
🧱 Option 2: Local Simulation (Advanced)
For demonstrating architecture capabilities in interviews or complex CI/CD scenarios, we provide simulated local and staging environments:

Local Environment:

URL: http://localhost:4000/fashionhub/

Uses custom nginx container serving simulated FashionHub pages

Includes intentional console errors for testing

Complete login form functionality

Staging Environment:

URL: http://localhost:5000/fashionhub/ (simple) or http://localhost/fashionhub/ (full)

Simulates real staging environment structure

Uses nginx proxy for realistic setup

Implementation Details:

Custom Docker images built from nginx:alpine

Complete HTML pages with navigation, forms, and interactive elements

Intentional console errors on about page for test validation

Responsive design mimicking real e-commerce site

All internal links for status code validation

🏗️ Project Architecture
text
test-automation/
├── config/              # Environment configurations
├── src/
│   ├── pages/          # Page Object Models
│   └── utils/          # Configuration, CSV, GitHub API
├── tests/              # 4 test case implementations  
├── docker/
│   ├── local-app/      # Simulated FashionHub application
│   └── staging-setup/  # Nginx proxy configuration
└── test-results/       # Test outputs and reports
🧪 Test Details
Test Case 1: Console Error Validation
Home Page: Verifies no console errors exist

About Page: Detects intentional error messages for validation

Technology: Playwright console event monitoring

Test Case 2: Link Status Verification
Tests all internal links return HTTP 200 or 30x status codes

Validates no 40x/50x errors occur

Uses Playwright API requests for efficiency

Test Case 3: Login Functionality
Tests login page accessibility and form elements

Uses provided credentials: demouser / fashion123

Validates form interaction and page functionality

Test Case 4: GitHub PR Reporting
Fetches open pull requests from GitHub REST API

Generates CSV report with PR name, creation date, and author

Uses example repository: appwrite/appwrite

🐳 Docker Setup
Local Environment (Simulated)
bash
npm run docker:local
Builds custom nginx container with simulated FashionHub app

Runs on port 4000

Includes all test pages with intentional errors

Staging Environment (Simulated)
bash
npm run docker:staging
Separate container instance on port 5000

Simulates staging environment isolation

Production Environment (Real)
bash
npm run docker:production
Tests against live production website

No external dependencies required

⚙️ Configuration
Environment Variables
NODE_ENV: Set environment (local|staging|production)

BASE_URL: Override base URL for testing

Browser Support
Chromium

Firefox (with optimized timeouts)

WebKit (Safari)

Key Configuration Files
config/*.json - Environment-specific settings

playwright.config.ts - Test runner configuration

docker-compose.*.yml - Container orchestration

📊 Test Results & Reports
Generated Outputs
HTML Reports: playwright-report/ - Interactive test results

JSON Results: test-results/test-results.json - Machine-readable format

CSV Reports: test-results/pull-requests.csv - GitHub PR data

Viewing Reports
bash
# Open HTML report in browser
npx playwright show-report

# View specific test results
npm run test:report
🔧 Development
Adding New Tests
Create Page Object in src/pages/

Implement test in tests/ directory

Follow Page Object Model pattern

Include proper error handling and waits

Running Specific Tests
bash
# Single test file
npx playwright test tests/test-case-1.spec.ts

# Debug mode
npm run test:debug

# Specific browser
npx playwright test --project=firefox
🐛 Troubleshooting
Firefox Issues
Increased timeout settings specifically for Firefox

Additional wait states for page loading

Optimized browser launch arguments

Docker Issues
bash
# Clean up containers
docker system prune -f

# Rebuild images
docker-compose build --no-cache

# Check Docker status
docker --version
docker ps
Network Issues


Comprehensive error logging and reporting

🎯 Success Metrics
18 Total Tests: 6 tests × 3 browsers (Chromium, Firefox, WebKit)

100% Test Case Coverage: All 4 required scenarios implemented

Multi-Environment Support: Local, Staging, Production

Cross-Browser Compatibility: Optimized for all major browsers

CI/CD Ready: Dockerized execution with comprehensive reporting

📝 Notes
Production First: For immediate results, use production environment

Flexible Architecture: Easy to switch between simulation and real environments

Enterprise Ready: Suitable for both development and CI/CD pipelines

Comprehensive Validation: All test cases thoroughly validated across environments

This test automation suite provides a robust, flexible solution for validating FashionHub website functionality across multiple environments and browsers.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
FashionHub Test Automation - Installation & Setup Guide
🛠️ System Requirements
Minimum Requirements
Operating System: Windows 10/11, macOS 10.14+, or Linux Ubuntu 18.04+

Node.js: Version 16.0 or higher

RAM: 4GB minimum, 8GB recommended

Storage: 2GB free space for dependencies and browsers

Recommended Setup
CPU: Multi-core processor (Intel i5 or equivalent)

RAM: 8GB or more for parallel test execution

Internet: Stable connection for downloading dependencies

📥 Installation Steps
Step 1: Install Node.js
Windows & macOS:

Download Node.js from nodejs.org

Choose the LTS version (recommended)

Run the installer with default settings

Verify installation:

bash
node --version
npm --version
Linux (Ubuntu/Debian):

bash
# Method 1: Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Method 2: Using snap
sudo snap install node --classic --channel=18
Step 2: Install Git (Required for version control)
Windows:

Download from git-scm.com

Use default installation options

Verify: git --version

macOS:

bash
# Using Homebrew
brew install git

# Or download from git-scm.com
Linux:

bash
sudo apt update
sudo apt install git
Step 3: Clone the Project
bash
# Clone the repository
git clone <repository-url>
cd fashionhub-test-automation

# Or if you have the code locally, navigate to the project directory
cd fashionhub-test-automation
Step 4: Install Project Dependencies
bash
# Install all npm dependencies
npm install

# This will install:
# - @playwright/test (testing framework)
# - typescript (type checking)
# - @types/node (TypeScript definitions)
Step 5: Install Playwright Browsers
bash
# Install all supported browsers (Chromium, Firefox, WebKit)
npx playwright install --with-deps

# This downloads approximately 500MB of browser binaries
# Installation time: 5-10 minutes depending on internet speed
🔧 Environment Configuration
Configuration Files Structure
text
config/
├── default.json     # Base configuration (fallback)
├── local.json       # Local development settings
├── staging.json     # Staging environment settings
└── production.json  # Production environment settings
Default Configuration (config/default.json)
json
{
  "baseURL": "https://pocketaces2.github.io/fashionhub/",
  "timeout": 45000,
  "headless": true,
  "browsers": ["chromium", "firefox", "webkit"],
  "slowMo": 0
}
Environment-Specific Configurations
Local Environment (config/local.json):

json
{
  "baseURL": "http://localhost:4000/fashionhub/",
  "headless": false,
  "timeout": 60000,
  "browsers": ["chromium", "firefox", "webkit"],
  "slowMo": 100
}
Staging Environment (config/staging.json):

json
{
  "baseURL": "http://localhost:5000/fashionhub/",
  "headless": true,
  "timeout": 60000,
  "browsers": ["chromium", "firefox", "webkit"],
  "slowMo": 0
}
Production Environment (config/production.json):

json
{
  "baseURL": "https://pocketaces2.github.io/fashionhub/",
  "headless": true,
  "timeout": 45000,
  "browsers": ["chromium", "firefox", "webkit"],
  "slowMo": 0
}
Environment Variables (.env)
Create a .env file in the project root:

env
# Application Environment
NODE_ENV=production
BASE_URL=https://pocketaces2.github.io/fashionhub/

# Playwright Configuration
PLAYWRIGHT_TEST_TIMEOUT=45000
PLAYWRIGHT_HEADLESS=true

# GitHub API (for Test Case 4)
GITHUB_API_URL=https://api.github.com
🐳 Docker Installation & Setup
Step 1: Install Docker Desktop
Windows:

Download Docker Desktop from docker.com

Enable WSL 2 backend (recommended)

Restart computer after installation

Verify: docker --version

macOS:

Download Docker Desktop for Mac

Drag to Applications folder

Start Docker Desktop from Applications

Verify: docker --version

Linux (Ubuntu):

bash
# Remove old versions
sudo apt remove docker docker-engine docker.io containerd runc

# Update package index
sudo apt update

# Install prerequisites
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group (avoid sudo)
sudo usermod -aG docker $USER
# Log out and log back in for group changes to take effect
Step 2: Install Docker Compose
Windows & macOS: Included with Docker Desktop

Linux:

bash
# Download latest version
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Apply executable permissions
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version
Step 3: Verify Docker Installation
bash
# Check Docker version
docker --version

# Check Docker Compose version  
docker-compose --version

# Test Docker installation
docker run hello-world

# Check Docker service status (Linux)
sudo systemctl status docker
🎯 Post-Installation Verification
Step 1: Verify Node.js and npm
bash
node --version    # Should show v16.x or higher
npm --version     # Should show 8.x or higher
git --version     # Should show git version
Step 2: Verify Project Setup
bash
# Check if all dependencies are installed
npm list

# Verify TypeScript compilation
npx tsc --noEmit

# Check Playwright installation
npx playwright --version
Step 3: Verify Browsers Installation
bash
# List installed browsers
npx playwright install --dry-run

# Test browser launch
npx playwright test --project=chromium --headed tests/test-case-1.spec.ts
🔍 Troubleshooting Common Issues
Node.js Installation Issues
"node: command not found"

Windows: Restart terminal or computer after installation

Linux/macOS: Check if Node.js is in PATH

Permission Errors (Linux/macOS)

bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
Playwright Browser Installation Issues
Network Timeouts:

bash
# Set longer timeout for slow connections
npx playwright install --with-deps --timeout=300000
Corporate Firewall:

bash
# Use HTTP proxy if behind corporate firewall
set HTTP_PROXY=http://your-proxy:port
set HTTPS_PROXY=http://your-proxy:port
npx playwright install
Manual Browser Download:

bash
# Skip browser installation during npm install
set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
npm install
# Then install browsers manually
npx playwright install
Docker Installation Issues
Windows WSL 2 Requirement:

Enable WSL 2 in Windows Features

Install WSL 2 Linux kernel update

Set WSL 2 as default: wsl --set-default-version 2

Linux Permission Issues:

bash
# Add user to docker group
sudo usermod -aG docker $USER
# Log out and log back in

# Or run Docker commands with sudo
sudo docker --version
Docker Desktop Not Starting:

Windows: Check Hyper-V and Virtualization are enabled in BIOS

macOS: Check System Preferences > Security & Privacy for Docker approval

Project-Specific Issues
TypeScript Compilation Errors:

bash
# Clear TypeScript cache
npx tsc --build --clean

# Reinstall dependencies
rm -rf node_modules
npm install
Missing Configuration Files:

bash
# Ensure all config files are present
ls config/
# Should show: default.json, local.json, staging.json, production.json
🚀 Quick Validation Test
Run this command to verify everything is working:

bash
# Quick test against production (no Docker required)
npm run test:production

# Expected output: "18 passed" for all tests across 3 browsers
📋 Environment Setup Checklist
Node.js 16+ installed and verified

Git installed and configured

Project dependencies installed (npm install)

Playwright browsers installed (npx playwright install --with-deps)

Docker installed and running (optional, for containerized tests)

Configuration files present in config/ directory

Environment variables set in .env file

Quick validation test passes

🆘 Getting Help
If you encounter issues during installation:

Check the troubleshooting section above

Verify all version requirements are met

Check console output for specific error messages

Ensure stable internet connection for downloads

Try the quick validation test to identify specific problems

For persistent issues, check:

Node.js documentation: https://nodejs.org/docs/

Playwright documentation: https://playwright.dev/docs/intro

Docker documentation: https://docs.docker.com/get-started/

This comprehensive setup guide ensures you have all necessary components installed and configured to run the FashionHub test automation suite successfully across all supported environments.
