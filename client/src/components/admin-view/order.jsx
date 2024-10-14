import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'


import React, { useState } from 'react'
import { Dialog } from '../ui/dialog'

const AdminOrdersView = () => {

  const [openDetailsDialog , setOpenDetailsDialog] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle> All Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Order ID
              </TableHead>
              <TableHead>
                Order Date
              </TableHead>
              <TableHead>
                Order Status
              </TableHead>
              <TableHead>
                Order Price
              </TableHead>
              <TableHead>
                <span className="sr-only">
                  Details
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>123456</TableCell>
              <TableCell>12/06/2024</TableCell>
              <TableCell>In process</TableCell>
              <TableCell> ₹1234</TableCell>
              <TableCell>
                <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog} >
                <Button onClick={()=>setOpenDetailsDialog(true)} >View Details </Button>
                <AdminOrdersView />
                </Dialog>
                
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )  
}

export default AdminOrdersView
