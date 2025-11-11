// Scripts specifically designed for testing Firefox
const { execSync } = require('child_process');

console.log('🧪 Testing Firefox specifically...');

try {
  // Run Firefox tests and display detailed logs.
  const result = execSync('npx playwright test --project=firefox --headed --timeout=60000', { 
    encoding: 'utf8',
    stdio: 'inherit'
  });
  console.log('✅ Firefox tests completed successfully');
} catch (error) {
  console.log('❌ Firefox tests failed');
  process.exit(1);
}
