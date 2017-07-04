Drupal 8 Isomorphic SPA With React
===================================

This sandbox is the Drupal 8 backend version of [this short version](https://github.com/tevdi/symfony-react-spa) of the [Example of integration with React and Webpack (Webpack Encore) for universal (isomorphic) React rendering, using Limenius/ReactBundle and Limenius/LiformBundle](https://github.com/Limenius/symfony-react-sandbox) provided by the guys of Limenius. I was looking for some isomorphic SPA sandboxes, with React rendering and Drupal 8 as backend with no luck (all the projects I saw were only client-side render) so the motivation was creating it.

It's based in the Limenius' sandbox, so for more information related to the project, read the link above or visit the
writing I did in Medium. Basically is a Drupal 8 application which uses the React library to create an isomorphic SPA (both server-side and client-side rendering). Elements used:
    
    * Drupal 8
    * Webpack
    * ReactJS
    * ReactBundle
    * ReactOnRails
    * PhpExecJs (using V8JS PHP)

How to run it
=============

First is required to create a database for the project (by default is named 'drupal8-react-spa').
    
    git clone https://github.com/tevdi/drupal8-react-spa.git
    
Prepare the project in the same way Drupal 8 suggests when installing a fresh Drupal 8 project, so I suggest to: 
    
    · Clean URLS':

        * Activate the Apache mod_rewrite: 
            
            $ a2enmod rewrite
        
        * Configure AllowOverride All for our directory. For example, if it's located in /var/www/drupal8-react-spa we should add an entry in /etc/apache2/apache2.conf somehow like this:
    
            <Directory /var/www/drupal8-react-spa/>
                AllowOverride All
                Require all granted
            </Directory>

    · Give the proper permissions to 'sites/default/files' directory:
        
        * I did setting the user 'www-data' as owner of that directory:

            $ sudo chown -R www-data:www-data /path/to/our/directory/drupal8-react-spa/sites/default/files/

Copy sites/default/default.settings.php to sites/default/settings.php and configure the parameters for the database.      

In the root of the project, execute:
    
    $ composer install
    $ patch vendor/twig/twig/lib/Twig/Environment.php < assets/Twig_Environment_Patch.diff
    
    We need the package drush/drush [https://packagist.org/packages/drush/drush](https://packagist.org/packages/drush/drush)
    
    $ drush sql-cli 
    
    In MySQL monitor:
    
        source assets/mysql-dump-drupal8-react-spa.sql
    
    Exit from MySQL monitor and being in the root again (exit):
    
    $ cd modules/spa/spa
    $ npm install
    $ npm run webpack-serverside
    $ npm run webpack-prod
    
    To finish, in the root again:
    
    $ drush cr

Check the project through your web server (for example localhost/drupal8-react-spa).    


Credits
=======

This project couldn't been done without the work of the Limenius team.