`timescale 1ns/1ns
module Carry_Select_Adder_tb();
	
	reg [7:0] a;
	reg [7:0] b;
	reg cin;
	wire cout;
	wire [7:0] y;
	
	reg clk;
	
	Carry_Select_Adder DUT (a[7:0], b[7:0], cin, y[7:0], cout);
	
	initial begin
		clk <= 0;
		cin <= 0;
		a[7:0] <= 8'd0;
		b[7:0] <= 8'd0;
	end
	
	always begin
		#1
		clk <= ~clk;
		cin <= ~cin;
	end
	
	always begin
		#2
		if (a[7:0] == 8'd255)
			a[7:0] <= 8'd0;	
		else
			a[7:0] <= a[7:0]+1;
	end
	
	always begin
		#512
		if (b[7:0] == 8'd255)
			b[7:0] <= 8'd0;	
		else
			b[7:0] <= b[7:0]+1;
	end
	
endmodule
			
	