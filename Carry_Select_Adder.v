/* Top Level*/
module Carry_Select_Adder(

	input wire [7:0] A,
	input wire [7:0] B,
	input wire Cin,
	output wire [7:0] Y,
	output wire Cout
);

	wire carry_chain;
	wire c0_chain;
	wire c1_chain;
	wire [3:0] c0_sum_chain;
	wire [3:0] c1_sum_chain;
	
	Full_Adder 		Group1_Sum (A[3:0], B[3:0], Cin, Y[3:0], carry_chain);

	Full_Adder		Group2_C0 (A[7:4], B[7:4], 1'b0, c0_sum_chain[3:0], c0_chain);
	Full_Adder		Group2_C1 (A[7:4], B[7:4], 1'b1, c1_sum_chain[3:0], c1_chain);
	Mux_2x1			Group2_Sum (c0_sum_chain[3:0], c1_sum_chain[3:0], carry_chain, Y[7:4]);
	Carry_Select	Group2_CSel (c0_chain, c1_chain, carry_chain, Cout);
	
endmodule

//Grouped in 4 bits
module Full_Adder (	

	input wire [3:0] A,
	input wire [3:0] B,
	input wire Cin,
	output reg [3:0] Y,
	output reg Cout
);

	wire [3:0] carry_chain;
	
	//always @ (*) begin
		assign carry_chain[0] = Cin;
		assign carry_chain[3:1] = (A[2:0] & B[2:0]) | (A[2:0] & carry_chain[2:0]) | (B[2:0] & carry_chain[2:0]);
	//end
	
	always @ (*) begin
		Y = A ^ B ^ carry_chain;
		Cout = (A[3] & B[3]) | (A[3] & carry_chain[3]) | (B[3] & carry_chain[3]);
	end
	
endmodule

//Basically OR and AND gate
module Carry_Select (

	input wire A, B, C,
	output reg Y
);
	always @ (*) begin
		Y = A | (B & C);
	end

endmodule

//2 to 1 mux, 4bit bus
module Mux_2x1 (

	input wire [3:0] In0,
	input wire [3:0] In1,
	input wire Sel,
	output reg [3:0] Out
);

	always @ (*) begin
		Out = Sel ? In1 : In0;
	end
	
endmodule
