function reliant_conservation_3(kwh) {
	var energy_charge_a = .02;
	var energy_charge_b = .06;
	var base_charge = 5;
	var centerpoint_energy_delivery_charge = 8.52;
	var centerpoint_energy_delivery_rate = 0.040981;
	var threshold = 1000
	 
	function first_tier(kwh){
		return base_charge + centerpoint_energy_delivery_charge + 
	    kwh*(energy_charge_a + centerpoint_energy_delivery_rate);
	} 
	 
	function second_tier(kwh, threshold){
		return (kwh-threshold)*(energy_charge_b + centerpoint_energy_delivery_rate);
	}
	
	if( kwh <= threshold){
	  return first_tier(kwh);
	} else {
	  return first_tier(threshold) + second_tier(kwh, threshold);
	}
}

function reliant_conservation_12(kwh){
	var energy_charge_a = .049;
	var energy_charge_b = .084;
	var base_charge = 0;
	var centerpoint_energy_delivery_charge = 8.52;
	var centerpoint_energy_delivery_rate = 0.040981;
	var threshold = 1000

	function first_tier(kwh){
		return base_charge + centerpoint_energy_delivery_charge + 
	    kwh*(energy_charge_a + centerpoint_energy_delivery_rate);
	} 
	 
	function second_tier(kwh, threshold){
		return (kwh-threshold)*(energy_charge_b + centerpoint_energy_delivery_rate);
	}
	
	if( kwh <= threshold){
	  return first_tier(kwh);
	} else {
	  return first_tier(threshold) + second_tier(kwh, threshold);
	}
}

function reliant_conservation_5(kwh) {
	var energy_charge_a = .021;
	var energy_charge_b = .061;
	var base_charge = 5;
	var centerpoint_energy_delivery_charge = 8.52;
	var centerpoint_energy_delivery_rate = 0.040981;
	var threshold = 1000
	
	function first_tier(kwh){
		return base_charge + centerpoint_energy_delivery_charge + 
	    kwh*(energy_charge_a + centerpoint_energy_delivery_rate);
	} 
	 
	function second_tier(kwh, threshold){
		return (kwh-threshold)*(energy_charge_b + centerpoint_energy_delivery_rate);
	}
	
	if( kwh <= threshold){
	  return first_tier(kwh);
	} else {
	  return first_tier(threshold) + second_tier(kwh, threshold);
	}
}

function infinite_energy_3_mo_saver(kwh){
	var energy_charge = .052416;
	var tdu_metering_and_customer_charge = 8.72;
	var tdu_delivery_charge = .039;
	var service_fee = 9.95;
	var threshold = 1000;

	function first_tier(kwh){
		return tdu_metering_and_customer_charge + 
			kwh*(energy_charge + tdu_delivery_charge);
	}
	
	if( kwh <= threshold){
	  return first_tier(kwh) + service_fee;
	} else {
	  return first_tier(kwh);
	}
}

function infinite_energy_the_all_inclusive_3_mo(kwh){
	var energy_charge = .098959;
	var tdu_metering_and_customer_charge = 0;
	var tdu_delivery_charge = 0;
	var service_fee = 9.95;
	var threshold = 1000;

	function first_tier(kwh){
		return tdu_metering_and_customer_charge + 
			kwh*(energy_charge + tdu_delivery_charge);
	}
	
	if( kwh <= threshold){
	  return first_tier(kwh) + service_fee;
	} else {
	  return first_tier(kwh);
	}
}

function infinite_energy_the_all_inclusive_6_mo(kwh){
	var energy_charge = .092002;
	var tdu_metering_and_customer_charge = 0;
	var tdu_delivery_charge = 0;
	var service_fee = 9.95;
	var threshold = 1000;

	function first_tier(kwh){
		return tdu_metering_and_customer_charge + 
			kwh*(energy_charge + tdu_delivery_charge);
	}
	
	if( kwh <= threshold){
	  return first_tier(kwh) + service_fee;
	} else {
	  return first_tier(kwh);
	}
}


function gexa_energy_gexa_choice_6(kwh){
	var energy_charge = 0.07;
	var monthly_service_fee = 0;
	var tdu_delivery_charge = 0.04;
	var tdu_delivery_charge_per_month_flat_charge = 8.72;
	var residential_usage_credit = -60;
	var threshold = 999

	function first_tier(kwh){
	return tdu_delivery_charge_per_month_flat_charge + monthly_service_fee +
		kwh*(energy_charge + tdu_delivery_charge)
	}
	
	if( kwh >= threshold){
	  return first_tier(kwh) + residential_usage_credit;
	} else {
	  return first_tier(kwh);
	}
}

