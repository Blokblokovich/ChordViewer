//
//  ViewController.swift
//  ChordViewer
//
//  Created by Blokblokovich on 22.11.2020.
//

import UIKit

class ViewController: UIViewController
{
	@IBOutlet weak var mainScreen: UILabel!
	@IBOutlet weak var textFiled: UITextField!
	@IBOutlet weak var textchangerview: UISlider!
	
	override func viewDidLoad()
	{
		super.viewDidLoad()
		textchangerview.value = 17
		
		var comp1 = Comp(cpu: 3.5, ram: 128)
		print(comp1.cpu)
		print(comp1.ram)
	}

	@IBAction func buttonPress(_ sender: UIButton)
	{
		let name = textFiled.text
		mainScreen.text = "Hello, \(name ?? "(your name)")!"
	}
	
	@IBAction func textchanger(_ sender: UISlider)
	{
		let textsize = CGFloat(sender.value)
		mainScreen.font = UIFont.systemFont(ofSize: textsize)
	}
}
