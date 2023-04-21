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