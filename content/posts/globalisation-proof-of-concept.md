---
title: 'Globalisation Proof of Concept'
description: 'Proof of Concept to Globalisation Project using Laravel Framework'
event: 'globalisation_proof_of_concept'
image: ''
draft: false
published: '2024-04-30'
---

# Globalisation Proof of Concept

Assalamualaikum.

Globalisation is a term used to describe to increase services across region, or you can say it as international expansion project. Region can be multiple country where we want to deploy. Let's implement this on [Laravel Framework](https://laravel.com/) where we gonna fully utilise [Facades](https://laravel.com/docs/11.x/facades) and environment file to distiguish region.

## Core folder structure

Let's create a `Core` folder inside `app` folder where we can distiguish services class for each region.

```bash
|- app
   |- Core
   |   |- Services
   |   |   |- Base
   |   |   |   |- OrderService
   |   |   |   |- ProductService
   |   |   |- MY
   |   |   |   |- OrderService
   |   |   |   |- ProductService
   |   |   |- PH
   |   |       |- OrderService
   |   |       |- ProductService
   |   |- Facades
   |      |- OrderService
   |- Providers
      |- CoreServiceProvider
```

### Service Class

For now we have all services class for two region Malaysia (MY) and Philippines (PH) with a base core services class. Each region services class will enherite base core services class. Take `OrderService` class as example and we have service tax to calculate from total price of order.

File: `app\Core\Services\Base\OrderService.php`
```php
namespace App\Core\Services\Base;

class OrderService {
    public function grandTotal(float $total)
    {
        $tax = $total * $this->tax();

        return $total + $tax;
    }

	public function tax()
	{
		return 1;
	}
}
```

File: `app\Core\Services\MY\OrderService.php`
```php
namespace App\Core\Services\MY;

use App\Core\Services\Base\OrderService AS BaseManager;

final class OrderService extends BaseManager {
	public function tax()
	{
		return 0.06;
	}
}
```

File: `app\Core\Services\PH\OrderService.php`
```php
namespace App\Core\Services\PH;

use App\Core\Services\Base\OrderService AS BaseManager;

final class OrderService extends BaseManager {
	public function tax()
	{
		return 0.05;
	}
}
```

### Facades

Create a new facade for OrderService class so that we can makes use of the static magic-method to defer calls from this facade to an object resolved from the container. We name this facade as '<b>Core.OrderService</b>'

File: `app\Core\Facades\OrderService.php`
```php
namespace App\Core\Facades;

use Illuminate\Support\Facades\Facade;

class OrderService extends Facade
{
     protected static function getFacadeAccessor()
     {
          return 'Core.OrderService';
     }
}
```

### Service Provider

When we want to use any static method on the OrderService facade, Laravel resolves the cache binding from the service container and runs the requested method. From here we bind the OrderService facade to different region service class based on `COUNTRY` environment variable. If no country is defined then it will throw `Exception`.


File: `app\Providers\CoreServiceProvider.php`
```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Core\Services;

class CoreServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind('Core.OrderService', function() {
            $country = env('COUNTRY', null);

            return match($country) {
                'MY' => new Services\MY\OrderService(),
                'PH' => new Services\PH\OrderService(),
                default => throw new Exception('Unsupported domain\'s service'),
            };
        });
    }
}
```

## Implementation

We can this using [Tinkerwell](https://tinkerwell.app/) by using the script below and don't forget to run `php artisan optimize` to cache all services class.

```php
use App\Core\Facades\OrderService;

OrderManager::grandTotal(10);

\\ Output
\\ Malaysia region where we set `COUNTRY=MY` in `.env` file
6

\\ Malaysia region where we set `COUNTRY=PH` in `.env` file
5
```

In a nutshell.

This concept really rely heavily on services class. One of my colleague advice that these configuration such as tax amount should be store in database, I think that would be great concept. What do you think?

See you soon!

