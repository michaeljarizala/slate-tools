import spawn from 'cross-spawn';
import debug from 'debug';
import config from '../config';

const logger = debug('slate-tools:test');

export function test() {
  logger(`--gulpfile ${config.gulpFile}`);
  logger(`--cwd ${config.themeRoot}`);

  return spawn(config.gulp, ['test', '--gulpfile', config.gulpFile, '--cwd', config.themeRoot], {
    detached: false,
    stdio: 'inherit',
  });
}

export default function(program) {
  program
    .command('test')
    .description('Runs translation tests for a theme\'s locale files (<theme>/src/locales/).')
    .action(test);
}
