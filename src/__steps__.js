/**
 *              FIREBASE    
 * 1. create firebase project
 * 2. create web app;
 * 3. npm install firebase;
 * 4. save firebase config and export default app;
 * 
 * 5. build > authentication > get started > sign-in method > ...after creating provider...
 *     > docs > build > authentication > web > get started 
 * 
*/


/**
 *          CONTEXT API
 * 1. create context provider file
 * 2. create a context(initial value null) and set provider
 * 3. set the children props;
 * 4. set context value  {AuthContext.Provider value={userInfo}};
 * 5. set the provider  {<AuthProvider>
                            <RouterProvider router={router} />
                        </AuthProvider>
   };
 * 6. export the  {const AuthContext = createContext(null)};  
 * 7. where use { const {user} = useContext(AuthContext)};
 * 
 * 
*/

/**
 * TO GET SIGNNED IN USER {Mange Users}
 * 
 * 
*/

/**
 * HOSTING
 * build > hostion > get Started
 * -----------------------------
 * Install Onetime per pc:
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * -----------------------
 * For Each project One Time:
 * 1.firebase init
 * 2.proceed
 * 3.To select use keyboard up and down arrow and spacebar
 * 4. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 * 5. existing project
 * 6. select the project (https://console.firebase.google.com/project/{simple-firebase-auth-29976}/hosting/sites) 
 * 7. whice file as public directory : dist 
 * 8. single page application : yes
 * 9. continuous deployment: no;
 * done
 * 
 * ----------------------
 * Firebase Deploy:
 * 1. npm run build
 * 2. firebase deploy
 *  
*/
