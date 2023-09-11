import React from 'react'

import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import { Spinner } from 'components/ui/blocks/Spinner'
import { Textarea } from 'components/ui'

const Home = () => {
	const content = [
		<h5>
			asdzn@Grave MINGW64 /b/__code/delete $ npx create-react-app . --template
			typescript Creating a new React app in B:\__code\delete. Installing
			packages. This might take a couple of minutes. Installing react,
			react-dom, and react-scripts with cra-template-typescript... added 1424
			packages in 2m 229 packages are looking for funding run `npm fund` for
			details Initialized a git repository. Installing template dependencies
			using npm... added 52 packages, and changed 2 packages in 11s 238 packages
			are looking for funding run `npm fund` for details We detected TypeScript
			in your project (src\App.test.tsx) and created a tsconfig.json file for
			you. Your tsconfig.json has been populated with default values. Removing
			template package using npm... removed 1 package, and audited 1476 packages
			in 4s 238 packages are looking for funding run `npm fund` for details 6
			high severity vulnerabilities To address all issues (including breaking
			changes), run: npm audit fix --force Run `npm audit` for details. Created
			git commit. Success! Created delete at B:\__code\delete Inside that
			directory, you can run several commands: npm start Starts the development
			server. npm run build Bundles the app into static files for production.
			npm test Starts the test runner. npm run eject Removes this tool and
			copies build dependencies, configuration files and scripts into the app
			directory. If you do this, you can’t go back! We suggest that you begin by
			typing: cd B:\__code\delete npm start Happy hacking! Starting the
			development server... One of your dependencies, babel-preset-react-app, is
			importing the "@babel/plugin-proposal-private-property-in-object" package
			without declaring it in its dependencies. This is currently working
			because "@babel/plugin-proposal-private-property-in-object" is already in
			your node_modules folder for unrelated reasons, but it may break at any
			time. babel-preset-react-app is part of the create-react-app project,
			which is not maintianed anymore. It is thus unlikely that this bug will
			ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
			your devDependencies to work around this error. This will make this
			message go away. Compiled successfully! You can now view delete in the
			browser. Local: http://localhost:3000 On Your Network:
			http://192.168.1.59:3000 Note that the development build is not optimized.
			To create a production build, use npm run build. webpack compiled
			successfully No issues found. Failed to compile. Module not found: Error:
			Can't resolve './App.css' in 'B:\__code\delete\src' ERROR in ./src/App.tsx
			6:0-19 Module not found: Error: Can't resolve './App.css' in
			'B:\__code\delete\src' webpack compiled with 1 error No issues found.
			webpack compiled with 2 errors Files successfully emitted, waiting for
			typecheck results... Issues checking in progress... ERROR in
			src/react-app-env.d.ts TS1002: Unterminated string literal. ERROR in
			src/react-app-env.d.ts:6:1 Compiled successfully! You can now view delete
			in the browser. Local: http://localhost:3000 On Your Network:
			http://192.168.1.59:3000 Note that the development build is not optimized.
			To create a production build, use npm run build. webpack compiled
			successfully No issues found. asdzn@Grave MINGW64 /b/__code/delete (main)
		</h5>,

		<h2>
			<Spinner style={{ margin: '0 auto' }} />
		</h2>,

		<h5>
			asdzn@Grave MINGW64 /b/__code/delete $ npx create-react-app . --template
			typescript Creating a new React app in B:\__code\delete. Installing
			packages. This might take a couple of minutes. Installing react,
			react-dom, and react-scripts with cra-template-typescript... added 1424
			packages in 2m 229 packages are looking for funding run `npm fund` for
			details Initialized a git repository. Installing template dependencies
			using npm... added 52 packages, and changed 2 packages in 11s 238 packages
			are looking for funding run `npm fund` for details We detected TypeScript
			in your project (src\App.test.tsx) and created a tsconfig.json file for
			you. Your tsconfig.json has been populated with default values. Removing
			template package using npm... removed 1 package, and audited 1476 packages
			in 4s 238 packages are looking for funding run `npm fund` for details 6
			high severity vulnerabilities To address all issues (including breaking
			changes), run: npm audit fix --force Run `npm audit` for details. Created
			git commit. Success! Created delete at B:\__code\delete Inside that
			directory, you can run several commands: npm start Starts the development
			server. npm run build Bundles the app into static files for production.
			npm test Starts the test runner. npm run eject Removes this tool and
			copies build dependencies, configuration files and scripts into the app
			directory. If you do this, you can’t go back! We suggest that you begin by
			typing: cd B:\__code\delete npm start Happy hacking! Starting the
			development server... One of your dependencies, babel-preset-react-app, is
			importing the "@babel/plugin-proposal-private-property-in-object" package
			without declaring it in its dependencies. This is currently working
			because "@babel/plugin-proposal-private-property-in-object" is already in
			your node_modules folder for unrelated reasons, but it may break at any
			time. babel-preset-react-app is part of the create-react-app project,
			which is not maintianed anymore. It is thus unlikely that this bug will
			ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
			your devDependencies to work around this error. This will make this
			message go away. Compiled successfully! You can now view delete in the
			browser. Local: http://localhost:3000 On Your Network:
			http://192.168.1.59:3000 Note that the development build is not optimized.
			To create a production build, use npm run build. webpack compiled
			successfully No issues found. Failed to compile. Module not found: Error:
			Can't resolve './App.css' in 'B:\__code\delete\src' ERROR in ./src/App.tsx
			6:0-19 Module not found: Error: Can't resolve './App.css' in
			'B:\__code\delete\src' webpack compiled with 1 error No issues found.
			webpack compiled with 2 errors Files successfully emitted, waiting for
			typecheck results... Issues checking in progress... ERROR in
			src/react-app-env.d.ts TS1002: Unterminated string literal. ERROR in
			src/react-app-env.d.ts:6:1 Compiled successfully! You can now view delete
			in the browser. Local: http://localhost:3000 On Your Network:
			http://192.168.1.59:3000 Note that the development build is not optimized.
			To create a production build, use npm run build. webpack compiled
			successfully No issues found. asdzn@Grave MINGW64 /b/__code/delete (main)
		</h5>,

		<h2>
			<Spinner style={{ margin: '0 auto' }} />
		</h2>,
		<h2>
			<Spinner style={{ margin: '0 auto' }} />
		</h2>,
		<h2>
			<Spinner style={{ margin: '0 auto' }} />
		</h2>,

		<h5>
			asdzn@Grave MINGW64 /b/__code/delete $ npx create-react-app . --template
			typescript Creating a new React app in B:\__code\delete. Installing
			packages. This might take a couple of minutes. Installing react,
			react-dom, and react-scripts with cra-template-typescript... added 1424
			packages in 2m 229 packages are looking for funding run `npm fund` for
			details Initialized a git repository. Installing template dependencies
			using npm... added 52 packages, and changed 2 packages in 11s 238 packages
			are looking for funding run `npm fund` for details We detected TypeScript
			in your project (src\App.test.tsx) and created a tsconfig.json file for
			you. Your tsconfig.json has been populated with default values. Removing
			template package using npm... removed 1 package, and audited 1476 packages
			in 4s 238 packages are looking for funding run `npm fund` for details 6
			high severity vulnerabilities To address all issues (including breaking
			changes), run: npm audit fix --force Run `npm audit` for details. Created
			git commit. Success! Created delete at B:\__code\delete Inside that
			directory, you can run several commands: npm start Starts the development
			server. npm run build Bundles the app into static files for production.
			npm test Starts the test runner. npm run eject Removes this tool and
			copies build dependencies, configuration files and scripts into the app
			directory. If you do this, you can’t go back! We suggest that you begin by
			typing: cd B:\__code\delete npm start Happy hacking! Starting the
			development server... One of your dependencies, babel-preset-react-app, is
			importing the "@babel/plugin-proposal-private-property-in-object" package
			without declaring it in its dependencies. This is currently working
			because "@babel/plugin-proposal-private-property-in-object" is already in
			your node_modules folder for unrelated reasons, but it may break at any
			time. babel-preset-react-app is part of the create-react-app project,
			which is not maintianed anymore. It is thus unlikely that this bug will
			ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
			your devDependencies to work around this error. This will make this
			message go away. Compiled successfully! You can now view delete in the
			browser. Local: http://localhost:3000 On Your Network:
			http://192.168.1.59:3000 Note that the development build is not optimized.
			To create a production build, use npm run build. webpack compiled
			successfully No issues found. Failed to compile. Module not found: Error:
			Can't resolve './App.css' in 'B:\__code\delete\src' ERROR in ./src/App.tsx
			6:0-19 Module not found: Error: Can't resolve './App.css' in
			'B:\__code\delete\src' webpack compiled with 1 error No issues found.
			webpack compiled with 2 errors Files successfully emitted, waiting for
			typecheck results... Issues checking in progress... ERROR in
			src/react-app-env.d.ts TS1002: Unterminated string literal. ERROR in
			src/react-app-env.d.ts:6:1 Compiled successfully! You can now view delete
			in the browser. Local: http://localhost:3000 On Your Network:
			http://192.168.1.59:3000 Note that the development build is not optimized.
			To create a production build, use npm run build. webpack compiled
			successfully No issues found. asdzn@Grave MINGW64 /b/__code/delete (main)
		</h5>,
	]

	return (
		<Layout>
			<section className={styles.root}>
				{content.map((element, index) => (
					<React.Fragment key={index}>
						{element}

						{index !== content.length - 1 && (
							<h5 style={{ userSelect: 'none' }}>&emsp;</h5>
						)}
					</React.Fragment>
				))}

				<h5 style={{ userSelect: 'none' }}>&emsp;</h5>
				<h5>asdzn@Grave MINGW64 /b/__code/delete (main)</h5>

				<Textarea />
			</section>
		</Layout>
	)
}

export { Home }
