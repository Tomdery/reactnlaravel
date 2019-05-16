<?php

use Illuminate\Http\Request;
use App\Post;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Returns all posts

Route::get("/post", function(){
	return Post::all();
});

// Returns post according to id

Route::get("/post/{id}", function($id){
	return Post::find($id);
});

// Returns post of selected category

Route::get("/category/{id}", function($id){
	return Post::where('category_id', $id)->get();
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
