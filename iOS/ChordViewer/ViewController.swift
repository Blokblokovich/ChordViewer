//
//  ViewController.swift
//  ChordViewer
//
//  Created by Blokblokovich on 22.11.2020.
//

import UIKit

class ViewController: UIViewController
{
	@IBOutlet weak var labelFirst: UILabel!
	@IBOutlet weak var button: UIButton!
	@IBOutlet weak var segmentControl: UISegmentedControl!
	
	override func viewDidLoad()
	{
		super.viewDidLoad()

		button.setTitle("Push me!", for: .normal)
		segmentControl.selectedSegmentIndex = 1
	}
	
	@IBAction func pushButton(_ sender: UIButton)
	{
		labelFirst.text = "Hello!"
	}
	@IBAction func colorControl(_ sender: UISegmentedControl)
	{
		if sender.selectedSegmentIndex == 0
		{
			button.backgroundColor = .red
		}
		
		else if sender.selectedSegmentIndex == 1
		{
			button.backgroundColor = .green
		}
		
		else
		{
			button.backgroundColor = .blue
		}
	}
}
