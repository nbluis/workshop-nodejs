var os 				= require('os'), //buildin module
      moduleOne		= require('./module_one'); // internal file module
      moduleTwo 	= require('./module_two'); // internal package module
      betterConsole	= require('better-console'); // third party module

betterConsole.warn(os.type(), os.arch(), os.release());
betterConsole.warn(moduleOne(), moduleTwo());
