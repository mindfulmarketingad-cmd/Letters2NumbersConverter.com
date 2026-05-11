'use client'

import React, { useState } from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

interface DataItem {
  name: string
  value: number
  color: string
}

const DEFAULT_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

export function PieGraphMaker() {
  const [activeTab, setActiveTab] = useState<'design' | 'data' | 'labels' | 'display'>('design')
  const [chartType, setChartType] = useState<'plain' | 'gradient'>('plain')
  const [pieType, setPieType] = useState<'normal' | '3d'>('normal')
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const [borderColor, setBorderColor] = useState('#0066CC')
  const [data, setData] = useState<DataItem[]>([
    { name: 'Category A', value: 30, color: '#FF6B6B' },
    { name: 'Category B', value: 25, color: '#4ECDC4' },
    { name: 'Category C', value: 20, color: '#45B7D1' },
    { name: 'Category D', value: 25, color: '#FFA07A' },
  ])

  const handleDataChange = (index: number, field: 'name' | 'value', value: string | number) => {
    const newData = [...data]
    if (field === 'name') {
      newData[index].name = value as string
    } else {
      newData[index].value = Math.max(0, Number(value))
    }
    setData(newData)
  }

  const handleColorChange = (index: number, color: string) => {
    const newData = [...data]
    newData[index].color = color
    setData(newData)
  }

  const addDataItem = () => {
    const newColor = DEFAULT_COLORS[data.length % DEFAULT_COLORS.length]
    setData([...data, { name: `Category ${String.fromCharCode(65 + data.length)}`, value: 10, color: newColor }])
  }

  const removeDataItem = (index: number) => {
    if (data.length > 1) {
      setData(data.filter((_, i) => i !== index))
    }
  }

  const downloadChart = () => {
    const canvas = document.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'pie-chart.png'
      link.click()
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-border">
        {[
          { id: 'design', label: 'Design', icon: '🎨' },
          { id: 'data', label: 'Data', icon: '📊' },
          { id: 'labels', label: 'Labels', icon: '🏷️' },
          { id: 'display', label: 'Display', icon: '👁️' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>{tab.icon}</span>
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Guest Warning */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
        You can edit this chart directly online. No signup required to create and download your pie chart.
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Controls */}
        <div className="space-y-6">
          {/* Design Tab */}
          {activeTab === 'design' && (
            <div className="space-y-6">
              {/* Chart Type and Colors */}
              <div className="space-y-4">
                <h3 className="font-bold text-foreground">Chart Type and Background</h3>

                {/* Color Mode */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Color Mode</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={chartType === 'plain'}
                        onChange={() => setChartType('plain')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Plain Color</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={chartType === 'gradient'}
                        onChange={() => setChartType('gradient')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Gradient Color</span>
                    </label>
                  </div>
                </div>

                {/* Colors Preview */}
                <div className="flex gap-4">
                  <div className="flex-1 p-4 border border-border rounded-lg bg-gray-100 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={150}>
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          outerRadius={50}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Background Color */}
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium w-32">Background Color</label>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-12 h-10 rounded border border-border cursor-pointer"
                  />
                </div>

                {/* Border Color */}
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium w-32">Border Color</label>
                  <input
                    type="color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-12 h-10 rounded border border-border cursor-pointer"
                  />
                </div>
              </div>

              {/* Chart Type */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="font-bold text-foreground">Chart Type</h3>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={pieType === 'normal'}
                      onChange={() => setPieType('normal')}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Normal</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={pieType === '3d'}
                      onChange={() => setPieType('3d')}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">3D</span>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">
                  {pieType === 'normal' ? 'Standard 2D pie chart' : '3D perspective pie chart'}
                </p>
              </div>
            </div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <div className="space-y-4">
              <h3 className="font-bold text-foreground">Enter Your Data</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {data.map((item, index) => (
                  <div key={index} className="flex gap-2 items-end p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <label className="text-xs font-medium text-muted-foreground">Label</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleDataChange(index, 'name', e.target.value)}
                        className="w-full px-2 py-1 border border-border rounded text-sm"
                      />
                    </div>
                    <div className="w-24">
                      <label className="text-xs font-medium text-muted-foreground">Value</label>
                      <input
                        type="number"
                        value={item.value}
                        onChange={(e) => handleDataChange(index, 'value', e.target.value)}
                        className="w-full px-2 py-1 border border-border rounded text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="color"
                        value={item.color}
                        onChange={(e) => handleColorChange(index, e.target.value)}
                        className="w-10 h-9 rounded border border-border cursor-pointer"
                      />
                    </div>
                    <button
                      onClick={() => removeDataItem(index)}
                      disabled={data.length === 1}
                      className="px-2 py-1 text-xs bg-destructive/20 text-destructive rounded hover:bg-destructive/30 disabled:opacity-50"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={addDataItem}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium text-sm"
              >
                + Add Category
              </button>
            </div>
          )}

          {/* Labels Tab */}
          {activeTab === 'labels' && (
            <div className="space-y-4">
              <h3 className="font-bold text-foreground">Edit Labels</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {data.map((item, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <label className="text-xs font-medium text-muted-foreground">Category {index + 1}</label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleDataChange(index, 'name', e.target.value)}
                      className="w-full px-2 py-1 border border-border rounded text-sm mt-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Display Tab */}
          {activeTab === 'display' && (
            <div className="space-y-4">
              <h3 className="font-bold text-foreground">Create Your Chart</h3>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Your pie chart is ready! Preview it on the right side. Click the download button to save as PNG.
                </p>
                <button
                  onClick={downloadChart}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  ⬇️ Download Chart
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Chart Preview */}
        <div className="flex flex-col items-center justify-center p-8 border border-border rounded-lg" style={{ backgroundColor }}>
          <div className="w-full h-96 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">Your Pie Chart</p>
          </div>
        </div>
      </div>
    </div>
  )
}
