<?php

namespace App\Http\Controllers;

use App\Region;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CovidStatusController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(\App\CovidStatus::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $today = CovidStatus::whereDate('created_at', Carbon::today())->first();

        if ( !is_null($today) ){
            $today->confirmed = $request->confirmed;
            $today->recovered = $request->recovered;
            $today->deaths = $request->deaths;
            $today->negative = $request->negative;
            $today->save();
        } else{
            CovidStatus::create($request->all());
        }


        return response()->json([
            'status' => 'success'
        ]);
    }

    public function getcases()
    {
        //
        $regionCases = [];
        $regions = Region::all();
        foreach ($regions as $region){
            $regionCases[$region->name] = $region->casesByRegion;
        }

        return response()->json([
            'cases' => $regionCases
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeRegion(Request $request)
    {
        //
        foreach ($request->all() as $req){
            echo $req;
        }

        return response()->json([
            'cases' => 'dg'
        ]);

    }
}
