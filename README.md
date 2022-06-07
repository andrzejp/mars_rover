# mars_rover

- ## Setup  
    
  It's easiest to have Node.js installed as a local runtime  
	- ### Initialize a project  
	    
	  We can create a new Node project in WebStorm. This just runs  
	    
	  `npm init -y`  
	    
	  The `-y` flag chooses all the dafaults for the questions that the `init` command asks.  
	- ### Initialize testing  
	    
	  We generally want to include `jest` as a development dependency (exclude from production package) by doing  
	    
	  `npm install —save-dev jest`  
	    
	  We can then further initialize Jest by running  
	    
	  `npx jest —init`  
	    
	  We use the `npx` binary because we want to run the local Jest. This asks some questions and produces a configuration file as well as setting Jest as the command to run in the `test` script.  
	    
	  By default Jest looks for test files in a directory under `___tests__` and in files ending in `spec.js` or `test.js`.  
	- ### Enable use of latest JavaScript version  
		- We use Babel to transpile code written in the latest JS to versions that run on various environments.  
		    
		  `npm install --save-dev @babel/core @babel/preset-env`  
		    
		  We need a `babel.config.json` with, at minimum  
		    
		  ```
		  		  {
		  		  "presets": [
		  		    "@babel/preset-env"
		  		  ]
		  		  }
		  ```
		    
		  `@babel/preset-env` is a smart preset that manages transformations, etc, needed for the target platform. By default it transforms all ES2015-ES2020 code to be ES5 compatible. This is not recommended by the Babel project, however. We should specify something like  
		    
		  ```
		  		  {
		  		  "targets": "> 0.25%, not dead"
		  		  }
		  ```
		    
		  This means that we support browsers with a global popularity above 0.25%, which are "not dead". The current default from the Browserlist project is  
		    
		  `> 0.5%, last 2 versions, Firefox ESR, not dead`  
		    
		  i.e. the last 2 versions of each still supported browser above 0.5% popularity (and Firefox Extended Support Release).  
		    
		  For a Node project we can do   
		  ```
		  		  "targets": {
		  		      "node": "current"
		  		  }
		  ```
	- ### ESLint  
		- `npm install eslint -D`  
		- Create setup  
			- `npm init @eslint/config`  
		- Plugins  
			- Jest  
				- `npm install -D eslint-plugin-jest`  
				- In `.eslintrc.json` we add  
					-  
					  ```
					  					  "plugins": [
					  					      "jest"
					  					    ]
					  ```
					-  
					  ```
					  					  "extends": [
					  					      ...
					  					      "plugin:jest/recommended",
					  					      "plugin:jest/style"
					  					    ],
					  ```
	- ### Prettier  
	- ### Mutation testing  
		- https://stryker-mutator.io/  
