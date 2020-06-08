Comandos de la aplicacion: // Comandos de laravel 5

- composer create-project --prefer-dist laravel/laravel walletApp

- php artisan migrate // Migrar datos de la base de datos

- php artisan preset react  // Integrar react en laravel

- npm install // Instalar dependencias de react

- php artisan serve // Iniciar servidor de desarrollo para laravel

- php artisan make:model Wallet -m // Generar el modelo Wallet, generar una migracion database/migrations

- php artisan make:model Transfer -m // Generar el modelo Transfer, generar una migracion database/migrations

- php artisan migrate // Migrar tablas a la base de datos

- php artisan // Lista todos los comandos disponibles 

- php artisan make:factory WalletFactory --model=Wallet  // Crear modelo de tipo factory 

- php artisan make:factory TransferFactory --model=Transfer  // Crear modelo de tipo factory 

- vendor/bin/phpunit // Ejecutar pruebas 

- php artisan make:test WalletTest // Generar clases para pruebas

- vendor/bin/phpunit // Ejecutar pruebas

- php artisan make:controller WalletController 

- vendor/bin/phpunit // Ejecutar pruebas

- Configurar la base de datos en el archivo phpunit.xml

- php artisan make:test TransferTest

- php artisan make:seeder TransferTableSeeder // Crear seeder para pruebas manuales de la db

- php artisan make:seeder WalletsTableSeeder // Crear seeder para pruebas manuales de la db

- php artisan db:seed // Agregar datos a la db

- php artisan serve // Ejecutar servidor de desarrollo laravel

- npm run dev // Compilar la aplicacion de JS react

- php artisan serve // Ejecutar servidor de desarrollo laravel


    

-----------------------------------------------------
test/Unit/ExampleTest.php


<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true);
    }
}
